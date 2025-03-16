import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const favoriteRepo = searchParams.get("favoriteRepo") || "Blingo2.0";
    const favoriteRepoDesc =
      searchParams.get("favoriteRepoDesc") ||
      "🚀 Ai based project roadmap generation: People new at hakathon get guidance on how to start their project and simplify the process of development.";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            background: "transparent",
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* GitHub Card */}
          <div
            style={{
              flex: 1,
              background: "rgba(0, 0, 0, 0.65)",
              borderRadius: "10px",
              padding: "20px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "200px",
              textAlign: "left",
              justifyContent: "center",
              backgroundImage:
                "url(https://wallpapers-clan.com/wp-content/uploads/2024/02/monkey-d-luffy-clouds-one-piece-desktop-wallpaper-preview.jpg)",
              backgroundSize: "contain",
              // backgroundPosition: "center", // Centers the image
              // backgroundRepeat: "no-repeat",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.65)",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0,0,255.99057,255.99057"
              style={{ zIndex: 1 }}
            >
              <g fill="#000000" fillRule="nonzero">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                </g>
              </g>
            </svg>
            <h3
              style={{
                color: "rgb(32, 32, 32)",
                zIndex: 1,
                margin: 0,
                fontSize: "24px",
              }}
            >
              GitHub 日誌
            </h3>
            <p
              style={{
                color: "rgb(75, 76, 78)",
                zIndex: 1,
                margin: "5px 0",
                fontSize: "16px",
              }}
            >
              My playground 🚀
            </p>
          </div>

          {/* Project Card */}
          <div
            style={{
              flex: 1,
              background: "#151b23",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              height: "200px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "url(https://user-images.githubusercontent.com/78488529/183985888-6724caf4-4f77-4467-9d0b-4e202159ef89.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.15,
                filter: "blur(3px)",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                textAlign: "left",
                justifyContent: "center",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontSize: "24px",
                }}
              >
                {favoriteRepo}
              </h2>
              <p
                style={{
                  color: "rgb(116, 129, 144)",
                  margin: "5px 0",
                  fontSize: "14px",
                }}
              >
                {favoriteRepoDesc}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                background: "#151b23",
                padding: "3px 9px",
                borderRadius: "5px",
                color: "white",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fbbc05",
                  fontWeight: "bold",
                }}
              >
                ⭐ Favourite
              </span>
            </div>
          </div>
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
