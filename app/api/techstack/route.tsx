import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// Emoji fallbacks for when icons aren't available
const EMOJI_FALLBACKS = [
  "🚀",
  "⚡",
  "🔥",
  "💻",
  "🎨",
  "🛠️",
  "⚙️",
  "📱",
  "🌐",
  "🔧",
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const tech1 = searchParams.get("tech1") || "nextjs";
    const tech2 = searchParams.get("tech2") || "react";
    const tech3 = searchParams.get("tech3") || "tailwind";
    const tech4 = searchParams.get("tech4") || "typescript";
    const tech5 = searchParams.get("tech5") || "nodejs";
    const backgroundColor = searchParams.get("color") || "#151b23";
    const textColor = searchParams.get("textColor") || "white";

    // Create tech array
    const techStack = [tech1, tech2, tech3, tech4, tech5].filter(Boolean);

    // Check which icons are available
    const iconAvailability = await Promise.all(
      techStack.map(async (tech) => {
        try {
          const normalizedTech = tech.toLowerCase().replace(/[^a-z0-9]/g, "");
          const response = await fetch(
            `https://skillicons.dev/icons?i=${normalizedTech}`
          );
          return response.status === 200;
        } catch {
          return false;
        }
      })
    );

    // Calculate width based on number of tech items
    const techWidth = 150; // Approximate width per tech badge
    const padding = 20;
    const gap = 15;
    const totalWidth = Math.min(
      1200,
      Math.max(
        500,
        techStack.length * techWidth +
          padding * 2 +
          (techStack.length - 1) * gap
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
            {techStack.map((tech, index) => {
              const normalizedTech = tech
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "");
              const displayName = tech.charAt(0).toUpperCase() + tech.slice(1);
              const hasIcon = iconAvailability[index];
              const emoji = EMOJI_FALLBACKS[index % EMOJI_FALLBACKS.length];

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: backgroundColor,
                    padding: "10px 15px",
                    borderRadius: "8px",
                    color: textColor,
                    fontSize: "16px",
                    fontWeight: 500,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  {hasIcon ? (
                    <img
                      src={`https://skillicons.dev/icons?i=${normalizedTech}`}
                      width="24"
                      height="24"
                      alt={displayName}
                      style={{ marginRight: "5px" }}
                    />
                  ) : (
                    <span style={{ fontSize: "20px", marginRight: "5px" }}>
                      {emoji}
                    </span>
                  )}
                  <span>{displayName}</span>
                </div>
              );
            })}
          </div>
        </div>
      ),
      {
        width: totalWidth,
        height: 80,
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate tech stack: ${error}`, {
      status: 500,
    });
  }
}
