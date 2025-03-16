export function GitHubStats({
  repoCount,
  stars,
  forks,
}: {
  repoCount: number;
  stars: number;
  forks: number;
}) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgb(19, 28, 37)",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          marginBottom: "15px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        GitHub Stats
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {repoCount}
          </div>
          <div style={{ color: "#888" }}>Repos</div>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{stars}</div>
          <div style={{ color: "#888" }}>Stars</div>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{forks}</div>
          <div style={{ color: "#888" }}>Forks</div>
        </div>
      </div>
    </div>
  );
}
