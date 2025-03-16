export function DiscordCard({ discordUsername }: { discordUsername: string }) {
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
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "-10px",
          transform: "rotate(-10deg)",
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
  );
}
