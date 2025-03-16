import React from "react";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import Stats from "@/components/bento-bottom/stats";
import Languages from "@/components/bento-bottom/languages";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || "EthanRodrigues001";

    const fetchImageAsBase64 = async (url: string) => {
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const contentType = response.headers.get("content-type") || "image/png";
      return `data:${contentType};base64,${base64}`;
    };

    // URLs for the stats and languages images
    const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&hide=contribs&show_icons=true&theme=transparent&hide_border=true&hide_rank=true`;
    const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`;

    // Fetch images as Base64
    const [statsBase64, languagesBase64] = await Promise.all([
      fetchImageAsBase64(statsUrl),
      fetchImageAsBase64(languagesUrl),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            height: "100%",
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Stats username={username} imageBase64={statsBase64} />
          <Languages username={username} imageBase64={languagesBase64} />
        </div>
      ),
      {
        width: 800,
        height: 200,
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate image: ${error}`, { status: 500 });
  }
}
