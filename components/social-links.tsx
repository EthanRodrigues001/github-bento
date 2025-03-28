export function SocialLinks() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
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
          justifyContent: "center",
          alignItems: "center",
          background: "#1da1f2",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0,0,255.99057,255.99057"
        >
          <g fill="#ffffff" fillRule="nonzero">
            <g transform="scale(10.66667,10.66667)">
              <path d="M21.80078,0h-19.60156c-1.19922,0 -2.19922,1 -2.19922,2.19922v19.60156c0,1.19922 1,2.19922 2.19922,2.19922h19.60156c1.19922,0 2.19922,-1 2.19922,-2.19922v-19.60156c0,-1.19922 -1,-2.19922 -2.19922,-2.19922zM7,20h-4v-11h4zM5,7.69922c-1.19922,0 -2,-0.80078 -2,-1.80078c0,-1.09766 0.80078,-1.89844 2,-1.89844c1.19922,0 2,0.80078 2,1.80078c0,1.09766 -0.80078,1.89844 -2,1.89844zM21,20h-4v-6c0,-1.60156 -1.10156,-2 -1.39844,-2c-0.30078,0 -1.60156,0.19922 -1.60156,2c0,0.19922 0,6 0,6h-4v-11h4v1.60156c0.60156,-0.90234 1.60156,-1.60156 3.5,-1.60156c1.89844,0 3.5,1.5 3.5,5z"></path>
            </g>
          </g>
        </svg>
        <div style={{ marginTop: "5px" }}>LinkedIn</div>
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
          justifyContent: "center",
          alignItems: "center",
          background: "#ff4500",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0,0,255.99057,255.99057"
        >
          <g fill="#ffffff" fillRule="nonzero">
            <g transform="scale(16,16)">
              <path d="M10.44727,0.26563c-0.13004,0.00413 -0.25335,0.05878 -0.34375,0.15234l-4.44727,4.44922l-2.56055,2.55859c-0.05137,0.05015 -0.09134,0.11076 -0.11719,0.17773c-1.20865,1.37039 -1.19195,3.4604 0.11719,4.76953l2.56055,2.56055c1.36138,1.36138 3.58588,1.36138 4.94727,0l2.25,-2.25c0.12632,-0.12664 0.17547,-0.31106 0.12895,-0.48378c-0.04653,-0.17271 -0.18167,-0.30748 -0.35451,-0.35354c-0.17284,-0.04605 -0.35712,0.00361 -0.48342,0.13028l-2.25,2.25c-0.97862,0.97862 -2.55263,0.97862 -3.53125,0l-2.56055,-2.56055c-0.97862,-0.97862 -0.97862,-2.55459 0,-3.5332l2.56055,-2.55859c0.97862,-0.97862 2.55263,-0.97862 3.53125,0l2.25,2.25c0.19524,0.19578 0.51223,0.19622 0.70801,0.00098c0.19578,-0.19524 0.19622,-0.51223 0.00098,-0.70801l-2.25,-2.25c-0.69283,-0.69282 -1.60914,-1.02407 -2.52148,-1.01172l2.73047,-2.73047c0.14893,-0.14387 0.19378,-0.36466 0.11278,-0.55523c-0.08099,-0.19058 -0.27107,-0.31152 -0.47802,-0.30414zM7.32813,9.40039c-0.18031,-0.00254 -0.34803,0.09219 -0.43893,0.24794c-0.0909,0.15575 -0.0909,0.34837 0,0.50412c0.0909,0.15575 0.25862,0.25049 0.43893,0.24794h6.90039c0.18031,0.00254 0.34803,-0.09219 0.43893,-0.24794c0.0909,-0.15575 0.0909,-0.34837 0,-0.50412c-0.0909,-0.15575 -0.25862,-0.25049 -0.43893,-0.24794z"></path>
            </g>
          </g>
        </svg>
        <div style={{ marginTop: "5px" }}>LeetCode</div>
      </div>
    </div>
  );
}
