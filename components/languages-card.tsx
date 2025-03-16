type LanguageData = [string, number];

export function LanguagesCard({
  languages,
  repoCount,
}: {
  languages: LanguageData[];
  repoCount: number;
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
        Top Languages
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {languages.map(([lang, count], index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: [
                  "#3572A5",
                  "#f1e05a",
                  "#e34c26",
                  "#563d7c",
                  "#2b7489",
                ][index % 5],
              }}
            />
            <div style={{ flex: 1 }}>{lang}</div>
            <div style={{ color: "#888" }}>
              {Math.round((count / repoCount) * 100)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
