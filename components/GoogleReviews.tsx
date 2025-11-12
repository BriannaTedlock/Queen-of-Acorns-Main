"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Review = {
  author_name: string;
  profile_photo_url?: string;
  author_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

type Data = {
  rating: number | null;
  total: number;
  url: string | null;
  reviews: Review[];
};

const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!;
const googleWriteUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

export default function GoogleReviews({ facebookPageSlug }: { facebookPageSlug?: string }) {
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/google-reviews")
      .then((r) => (r.ok ? r.json() : r.json().then((j) => Promise.reject(j))))
      .then((j) => mounted && setData(j))
      .catch((e) => mounted && setErr(e?.details || "Failed to load Google reviews"));
    return () => {
      mounted = false;
    };
  }, []);

  const fbUrl = facebookPageSlug ? `https://facebook.com/${facebookPageSlug}` : null;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Reviews</h2>
          {data?.rating != null && (
            <p className="text-sm text-muted-foreground">
              Google rating: <span className="font-medium">{data.rating.toFixed(1)}</span>
              {typeof data.total === "number" ? <> from {data.total} reviews</> : null}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Button asChild>
            <a href={googleWriteUrl} target="_blank" rel="noopener noreferrer">
              Leave a Google review
            </a>
          </Button>
          {fbUrl && (
            <Button variant="secondary" asChild>
              <a href={fbUrl} target="_blank" rel="noopener noreferrer">
                Leave a Facebook review
              </a>
            </Button>
          )}
        </div>
      </div>

      {err && <p className="text-sm text-red-600">{err}</p>}

      {!data && !err && <p className="text-muted-foreground">Loading Google reviews…</p>}

      {data && (
        <>
          {data.reviews.length === 0 ? (
            <p className="text-muted-foreground">No Google reviews yet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {data.reviews.map((r, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      {r.profile_photo_url ? (
                        <Image
                          src={r.profile_photo_url}
                          alt={r.author_name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-muted" />
                      )}
                      <div className="min-w-0">
                        {r.author_url ? (
                          <a
                            href={r.author_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:underline"
                          >
                            {r.author_name}
                          </a>
                        ) : (
                          <div className="font-medium">{r.author_name}</div>
                        )}
                        <div className="text-xs text-muted-foreground">
                          {r.relative_time_description}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      {"★".repeat(r.rating)}
                      <span className="text-muted-foreground">
                        {"★".repeat(Math.max(0, 5 - r.rating))}
                      </span>
                    </div>

                    <p className="text-sm leading-6 whitespace-pre-line">{r.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Required attribution per Google policies */}
          <div className="text-xs text-muted-foreground">
            Reviews powered by Google. Display limited to the most relevant recent reviews.
          </div>

          {data.url && (
            <div className="pt-2">
              <Link href={data.url} target="_blank" className="text-sm underline">
                View on Google
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
