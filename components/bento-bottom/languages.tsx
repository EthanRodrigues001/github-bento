import React from "react";

const Languages = ({
  username,
  imageBase64,
}: {
  username: string;
  imageBase64: string;
}) => {
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
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        Top Languages
      </div>
      <img
        src={imageBase64}
        alt={`${username}'s Top Languages`}
        width={500} // Specify the width
        height={150} // Specify the height
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default Languages;
