import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const badgesParam =
      searchParams.get("badges") || "📍 Navi Mumbai, India,⭐ Resume";
    const badgeColor = searchParams.get("color") || "rgb(19, 28, 37)";
    const textColor = searchParams.get("textColor") || "white";

    // Parse badges
    const badges = badgesParam
      .split(",")
      .map((badge) => badge.trim())
      .filter(Boolean);

    // Calculate width based on number of badges
    const badgeWidth = 100; // Approximate width per badge
    const padding = 0;
    const gap = 15;
    const totalWidth = Math.min(
      1200,
      Math.max(
        400,
        badges.length * badgeWidth + padding * 2 + (badges.length - 1) * gap
      )
    );

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: `${padding}px`,
            background: "transparent",
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${gap}px`,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {badges.map((badge, index) => {
              // Check if badge has a link format
              const isLink = badge.includes("|");
              const [badgeText] = isLink ? badge.split("|") : [badge];

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    background: badgeColor,
                    padding: "8px 12px",
                    borderRadius: "5px",
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: 500,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    cursor: isLink ? "pointer" : "default",
                    border: isLink ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  {badgeText}
                </div>
              );
            })}
          </div>
        </div>
      ),
      {
        width: totalWidth,
        height: 50,
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate badges: ${error}`, { status: 500 });
  }
}
