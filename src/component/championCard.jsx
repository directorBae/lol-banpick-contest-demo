import React from "react";

const ChampionCard = ({ team, champion, position }) => {
  return (
    <div
      style={{
        width: "13%",
        height: "100%",
        position: "relative",
        margin: "0px 15px 0px 15px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          position: "absolute",
          borderRadius: 15,
        }}
        src="https://via.placeholder.com/200x364"
        alt="champion"
      />
      <div
        style={{
          width: "100%",
          height: 67,
          left: 0,
          top: 280,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 66,
            left: 0,
            top: 0,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.70)",
          }}
        />
        <div
          style={{
            width: "100%",
            height: 67,
            left: 15,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              left: 0,
              top: 19,
              position: "absolute",
              color: team === "Blue" ? "#001D82" : "#A13F3F",
              width: "100%",
              textAlign: "left",
              fontSize: 40,
              fontFamily: "Pretendard",
              fontWeight: "700",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {champion}
          </div>
          <div
            style={{
              left: 2,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 20,
              fontFamily: "Pretendard",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
