import React from "react";
import { isMobile } from "react-device-detect";

const ChampionCard = ({
  team,
  champion,
  position,
  F,
  mostChampion,
  winRate,
}) => {
  if (!isMobile) {
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
        <div
          style={{
            width: "100%",
            height: 40,
            left: 0,
            top: 160,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.8)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              color: "Black",
              width: "100%",
              textAlign: "left",
              margin: "2px 0px 0px 15px",
              fontSize: 14,
              marginTop: 2,
              fontFamily: "Pretendard",
              fontWeight: "500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {"Most Champion: " + mostChampion}
          </div>
          <div
            style={{
              color: "Black",
              width: "100%",
              textAlign: "left",
              margin: "2px 0px 0px 15px",
              fontSize: 14,
              marginTop: 2,
              fontFamily: "Pretendard",
              fontWeight: "500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {"Recent Win rate: " + Math.round(winRate * 100) + "%"}
          </div>
        </div>
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
  } else {
    return (
      <div
        style={{
          width: 70,
          height: "50%",
          position: "relative",
          margin: "0px 5px 0px 5px",
        }}
        onClick={F}
      >
        <div
          style={{
            width: "100%",
            height: 30,
            left: 0,
            top: "30%",
            position: "absolute",
            background: "rgba(255, 255, 255, 0.8)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              color: "Black",
              width: "100%",
              textAlign: "left",
              margin: "2px 0px 0px 2px",
              fontSize: 8,
              marginTop: 2,
              fontFamily: "Pretendard",
              fontWeight: "500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {"Most: " + mostChampion}
          </div>
          <div
            style={{
              color: "Black",
              width: "100%",
              textAlign: "left",
              margin: "2px 0px 0px 2px",
              fontSize: 8,
              marginTop: 2,
              fontFamily: "Pretendard",
              fontWeight: "500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {"WinRate: " + Math.round(winRate * 100) + "%"}
          </div>
        </div>
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
            height: "25%",
            left: 0,
            top: "60%",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
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
              left: 8,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              style={{
                left: 0,
                top: 12,
                position: "absolute",
                color: team === "Blue" ? "#001D82" : "#A13F3F",
                width: "100%",
                textAlign: "left",
                fontSize: 16,
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
                top: 2,
                position: "absolute",
                color: "black",
                fontSize: 10,
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
  }
};

export default ChampionCard;
