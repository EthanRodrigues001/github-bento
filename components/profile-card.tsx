export function ProfileCard({ avatarUrl }: { avatarUrl?: string }) {
  return (
    <div
      style={{
        flex: 1,
        background: "rgb(19, 28, 37)",
        borderRadius: "15px",
        padding: "20px",
        position: "relative",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: avatarUrl ? `url(${avatarUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "5px 10px",
          borderRadius: "50%",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ↗
      </div>
      <div
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "18px",
          letterSpacing: "2px",
          position: "absolute",
          right: "10px",
          top: "50%",
          color: "white",
        }}
      >
        イーサン
      </div>
    </div>
  );
}
