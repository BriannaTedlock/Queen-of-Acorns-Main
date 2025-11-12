// app/api/google-reviews/route.ts
import { NextResponse } from "next/server";

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

// Basic types to avoid any
interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  author_url?: string;
  rating: number;
  relative_time_description?: string;
  text?: string;
}

interface GoogleResult {
  rating?: number;
  user_ratings_total?: number;
  url?: string;
  reviews?: GoogleReview[];
}

interface GoogleResponse {
  status: string;
  result?: GoogleResult;
  error_message?: string;
}

// In-memory cache (best effort)
let cache: { data: unknown; ts: number } | null = null;
const TTL_MS = 1000 * 60 * 30; // 30 minutes

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json(
      { error: "MISSING_ENV", details: "Place ID or API key is not set." },
      { status: 500 }
    );
  }

  try {
    // Serve cached data if fresh
    if (cache && Date.now() - cache.ts < TTL_MS) {
      return NextResponse.json(cache.data, {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=600",
        },
      });
    }

    const fields = ["rating", "user_ratings_total", "url", "reviews"].join("%2C");
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      PLACE_ID
    )}&fields=${fields}&reviews_no_translations=true&key=${API_KEY}`;

    // Let Vercel cache this fetch for 30 min
    const res = await fetch(url, { next: { revalidate: 1800 } });
    const json: GoogleResponse = (await res.json()) as GoogleResponse;

    if (json.status !== "OK") {
      return NextResponse.json(
        {
          error: json.status,
          details: json.error_message ?? "Google Place Details request failed.",
        },
        { status: 502 }
      );
    }

    const result = json.result ?? {};

    const payload = {
      rating: result.rating ?? null,
      total: result.user_ratings_total ?? 0,
      url: result.url ?? null,
      reviews: (result.reviews ?? []).slice(0, 5).map((r) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url ?? null,
        author_url: r.author_url ?? null,
        rating: r.rating,
        relative_time_description: r.relative_time_description ?? "",
        text: r.text ?? "",
      })),
    };

    // Cache in-memory for 30 min
    cache = { data: payload, ts: Date.now() };

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=600",
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "FETCH_FAILED", details: msg },
      { status: 500 }
    );
  }
}
