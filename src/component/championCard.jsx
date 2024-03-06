import React from "react";

const ChampionCard = ({ team, champion, position }) => {
  return (
    <div style={{ width: 200, height: 364, position: "relative", margin: 25 }}>
      <img
        style={{
          width: 200,
          height: 364,
          left: 0,
          top: 0,
          position: "absolute",
        }}
        src="https://via.placeholder.com/200x364"
        alt="champion"
      />
      <div
        style={{
          width: 200,
          height: 67,
          left: 0,
          top: 280,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 200,
            height: 66,
            left: 0,
            top: 0,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.70)",
          }}
        />
        <div
          style={{
            width: 71,
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
              color: "#001D82",
              fontSize: 40,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            {position}
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
            {team}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
