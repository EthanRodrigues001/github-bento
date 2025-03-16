export function ProjectCard({
  favoriteRepo,
  favoriteRepoDesc,
}: {
  favoriteRepo: string;
  favoriteRepoDesc: string;
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
          background: "rgb(19, 28, 37)",
          padding: "3px 9px",
          borderRadius: "5px",
          color: "white",
          zIndex: 1,
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
  );
}
