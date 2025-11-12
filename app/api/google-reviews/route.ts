// app/api/google-reviews/route.ts
import { NextResponse } from "next/server";

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

// In-memory cache (best-effort; serverless instances may cold-start)
// We also leverage fetch's next.revalidate to have Vercel cache upstream.
let cache: { data: any; ts: number } | null = null;
const TTL_MS = 1000 * 60 * 30; // 30 minutes

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json(
      { error: "MISSING_ENV", details: "Place ID or API key is not set." },
      { status: 500 }
    );
  }

  try {
    if (cache && Date.now() - cache.ts < TTL_MS) {
      return NextResponse.json(cache.data, {
        status: 200,
        headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=600" },
      });
    }

    // Keep the fields tight. Google returns up to 5 most relevant reviews.
    // You can add &language=en to control language.
    const fields = [
      "rating",
      "user_ratings_total",
      "url",
      "reviews",
    ].join("%2C");

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      PLACE_ID
    )}&fields=${fields}&reviews_no_translations=true&key=${API_KEY}`;

    // next.revalidate enables Vercel's caching layer for upstream fetches.
    const res = await fetch(url, { next: { revalidate: 1800 } });
    const json = await res.json();

    if (json.status !== "OK") {
      return NextResponse.json(
        { error: json.status, details: json.error_message ?? "Place Details failed" },
        { status: 502 }
      );
    }

    const result = json.result ?? {};

    const payload = {
      rating: result.rating ?? null,
      total: result.user_ratings_total ?? 0,
      url: result.url ?? null,
      reviews: (result.reviews ?? []).slice(0, 5).map((r: any) => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        author_url: r.author_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
      })),
    };

    cache = { data: payload, ts: Date.now() };

    return NextResponse.json(payload, {
      status: 200,
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=600" },
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: "FETCH_FAILED", details: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
