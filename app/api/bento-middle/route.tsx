import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || "EthanRodrigues001";
    const discordUsername = searchParams.get("discord") || "dev_ethan";
    const linkedinUsername = searchParams.get("linkedin") || "Ethan-Rodrigues";
    const twitterUsername = searchParams.get("twitter") || "EthanRo97737635";

    // Fetch GitHub data for avatar
    let avatarUrl = "";
    try {
      const userDataRes = await fetch(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );
      const userData = await userDataRes.json();
      avatarUrl = userData.avatar_url || "";
    } catch (e) {
      console.error("Failed to fetch GitHub user data:", e);
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            height: "100%",
            background: "transparent",
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Profile Card */}
          <div
            style={{
              flex: 1,
              background: "#151b23",
              borderRadius: "15px",

              position: "relative",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Ensures center alignment
              overflow: "hidden", // Prevents overflow of the image
            }}
          >
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="Avatar"
                style={{
                  position: "absolute",
                  inset: 0, // Adjust inset as needed
                  width: "100%", // Ensures it fills the container
                  height: "100%",
                  objectFit: "cover", // Ensures full coverage
                  objectPosition: "center", // Centers the image properly
                  //   top: "50%",
                  //   left: "50%",
                  //   transform: "translate(-50%, -50%)",
                  opacity: 0.7, // Adjust opacity if needed
                  zIndex: 1,
                }}
              />
            )}
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "18px",
                letterSpacing: "2px",
                position: "absolute",
                left: "10px",
                bottom: "10px",
                color: "white",
                zIndex: 2,
              }}
            >
              イーサン
            </div>
          </div>

          {/* Social Links Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              height: "200px", // Set explicit height
            }}
          >
            {/* LinkedIn */}
            <div
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                color: "white",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Ensure vertical centering
                alignItems: "center", // Ensure horizontal centering
                background: "#1da1f2",
                opacity: 0.9,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0,0,255.99057,255.99057"
                style={{ marginBottom: "5px", zIndex: 1 }} // Add margin to separate icon from text
              >
                <g fill="#ffffff" fillRule="nonzero">
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M21.80078,0h-19.60156c-1.19922,0 -2.19922,1 -2.19922,2.19922v19.60156c0,1.19922 1,2.19922 2.19922,2.19922h19.60156c1.19922,0 2.19922,-1 2.19922,-2.19922v-19.60156c0,-1.19922 -1,-2.19922 -2.19922,-2.19922zM7,20h-4v-11h4zM5,7.69922c-1.19922,0 -2,-0.80078 -2,-1.80078c0,-1.09766 0.80078,-1.89844 2,-1.89844c1.19922,0 2,0.80078 2,1.80078c0,1.09766 -0.80078,1.89844 -2,1.89844zM21,20h-4v-6c0,-1.60156 -1.10156,-2 -1.39844,-2c-0.30078,0 -1.60156,0.19922 -1.60156,2c0,0.19922 0,6 0,6h-4v-11h4v1.60156c0.60156,-0.90234 1.60156,-1.60156 3.5,-1.60156c1.89844,0 3.5,1.5 3.5,5z"></path>
                  </g>
                </g>
              </svg>
              <div style={{ zIndex: 1 }}>{linkedinUsername}</div>
            </div>

            {/* LeetCode */}
            <div
              style={{
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                color: "white",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Ensure vertical centering
                alignItems: "center", // Ensure horizontal centering
                background: "#000000",
                opacity: 0.9,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,255.99057,255.99057"
                style={{ marginBottom: "5px", zIndex: 1 }}
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                  </g>
                </g>
              </svg>
              <div style={{ zIndex: 1 }}>{twitterUsername}</div>
            </div>
          </div>

          {/* Discord Card */}
          <div
            style={{
              flex: 1,
              background: "#151b23",
              borderRadius: "15px",
              padding: "20px",
              position: "relative",
              height: "200px", // Set explicit height
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontWeight: "bold",
                background: "#f85149",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Collaborate 一緒に
            </div>
            <div
              style={{
                marginTop: "20px",
                color: "#888",
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              via Discord <br />
              <span style={{ color: "#64ffda" }}>{`@${discordUsername}`}</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 800,
        height: 200, // Update height to 200px
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
