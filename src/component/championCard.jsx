import React from "react";

const ChampionCard = ({ team, champion, position, F }) => {
  return (
    <div
      style={{
        width: 200,
        height: "100%",
        position: "relative",
        margin: "0px 15px 0px 15px",
      }}
      onClick={F}
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
        src={`images/${champion}.jpg`}
        alt="champion"
      />
      <div
        style={{
          width: "100%",
          height: 67,
          left: 0,
          top: "70%",
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
              top: 25,
              position: "absolute",
              color: team === "Blue" ? "#001D82" : "#A13F3F",
              width: "100%",
              textAlign: "left",
              fontSize: 32,
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
              top: 6,
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
