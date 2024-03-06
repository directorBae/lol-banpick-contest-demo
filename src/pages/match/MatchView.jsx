import ChampionCard from "../../component/championCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const GetMatchData = () => {
  let location = useLocation();
  const authKey = location.state.authKey;
};

const PostMatchData = async ({ match_id }) => {
  const [answer, setAnswer] = useState("");

  let location = useLocation();
  const authKey = location.state.authKey;
  const response = await fetch("http://localhost:3001/api/submit", {});
  const data = await response.json();
  setAnswer(data.answer);

  return { answer, setAnswer };
};

const RoundUpMessage = ({ data, roundNum }) => {
  if (data && roundNum !== 10) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "rgba(255, 255, 255, 0.20)",
            boxShadow: "0px 0px 112.5px 44px rgba(255, 255, 255, 0.25) inset",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(40px)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 64,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            축하합니다!
            <br />
          </span>
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 32,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            <br />
            예측률이 50%를 넘어, 다음 라운드에 진출할 수 있습니다.
            <br />
            <br />
            다음 라운드도 무운을 빌겠습니다.
          </span>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              height: 99,
              background:
                "linear-gradient(155deg, rgba(0, 25.50, 255, 0.15) 0%, rgba(255, 0, 0, 0.15) 100%)",
              borderRadius: 8,
              marginTop: 70,
              border: "1px black solid",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 58,
                color: "white",
                fontSize: 32,
                fontFamily: "Pretendard",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              다음 라운드 가기
            </div>
          </div>
        </div>
      </div>
    );
  } else if (data && roundNum === 10) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "rgba(255, 255, 255, 0.20)",
            boxShadow: "0px 0px 112.5px 44px rgba(255, 255, 255, 0.25) inset",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(40px)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 64,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            축하합니다!
            <br />
          </span>
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 32,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            <br />
            {"모든 라운드를 성공적으로 통과하셨습니다.\n"}
            <br />
            {
              "순위권에 들었을 시 구글 폼을 통해 수집한 연락처로 연락드릴 예정입니다.\n"
            }
            <br />
            {"콘테스트 참여에 감사드립니다. 수고 많으셨습니다.\n"}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "rgba(255, 255, 255, 0.20)",
            boxShadow: "0px 0px 112.5px 44px rgba(255, 255, 255, 0.25) inset",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(40px)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 64,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            아쉽습니다.
            <br />
          </span>
          <span
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontSize: 32,
              fontFamily: "Pretendard",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            <br />
            예측률이 50%를 넘지 못해, 다음 라운드에 진출하실 수 없습니다.
            <br />
            순위권에 들었을 시 구글 폼을 통해 수집한 연락처로 연락드릴
            예정입니다.
            <br />
            콘테스트 참여에 감사드립니다. 수고 많으셨습니다.
          </span>
        </div>
      </div>
    );
  }
};

const ScoreBoard = ({ score, roundNum }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "35vw",
          height: "100%",
          background: "rgba(255, 255, 255, 0.01)",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25) inset",
          borderRadius: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "70%",
            background: "rgba(255, 0, 0, 0.15)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25) inset",
            borderRadius: 16,
            marginRight: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 26,
              fontFamily: "Pretendard",
              fontWeight: "400",
              wordWrap: "break-word",
              textAlign: "center",
            }}
          >
            Red wins.
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 32,
            fontFamily: "Pretendard",
            fontWeight: "100",
            wordWrap: "break-word",
          }}
        >
          Score
          <br />
          {score + "/" + roundNum}
        </div>
        <div
          style={{
            width: "25%",
            height: "70%",
            background: "rgba(0, 26, 255, 0.15)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25) inset",
            borderRadius: 16,
            marginLeft: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 26,
              fontFamily: "Pretendard",
              fontWeight: "400",
              wordWrap: "break-word",
              textAlign: "center",
            }}
          >
            Blue wins.
          </div>
        </div>
      </div>
    </div>
  );
};

const RoundMatchCountBar = ({ roundNum, matchNum }) => {
  return (
    <div
      style={{
        position: "relative",
        top: 30,
        width: "100vw",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 340,
          height: 120,
          background: "rgba(255, 255, 255, 0.01)",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25) inset",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 40,
            fontFamily: "Pretendard",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          {roundNum + "/10 R"}
          <br />
          {matchNum + "/30 Match"}
        </div>
      </div>
    </div>
  );
};

const BeforeMatch = ({ champion }) => {
  return (
    <div style={{ width: 1122, height: 100, position: "relative" }}>
      <div
        style={{
          width: 1122,
          height: 100,
          left: 0,
          top: 0,
          position: "absolute",
          borderRadius: 8,
          border: "1px black solid",
        }}
      />
      <div
        style={{
          width: 1087,
          height: 75,
          left: 16,
          top: 13,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 75,
            height: 75,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
            boxShadow: "0px 0px 8px 2px rgba(255, 244.80, 0, 0.50) inset",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 92,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 184,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 276,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 368,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 644,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 736,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 828,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 920,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 75,
            height: 75,
            left: 1012,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
      </div>
    </div>
  );
};

const BeforeMatchView = ({ data, index }) => {
  <div
    style={{
      width: 1200,
      height: 897,
      background: "rgba(255, 255, 255, 0.90)",
      borderRadius: 8,
      border: "3px black solid",
      backdropFilter: "blur(40px)",
    }}
  >
    <div
      style={{
        color: "rgba(132.81, 132.81, 132.81, 0.80)",
        fontSize: 32,
        fontFamily: "Pretendard",
        fontWeight: "700",
        wordWrap: "break-word",
      }}
    >
      Current Pick:
    </div>
    <div style={{ width: 305, height: 48 }}>
      <span style="color: 'black', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'">
        Top
      </span>
      <span style="color: 'black', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '300', wordWrap: 'break-word'">
        {" "}
        Garen
      </span>
    </div>
    <div
      style={{
        width: 163,
        height: 24,
        color: "#A13F3F",
        fontSize: 20,
        fontFamily: "Pretendard",
        fontWeight: "600",
        wordWrap: "break-word",
      }}
    >
      Team Red
    </div>
  </div>;
};

const TenChampionTemplate = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "85vh" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 800,
        }}
      >
        <ChampionCard team="Red" champion={"Garen"} position={"Top"} />
        <ChampionCard team="Red" champion={"Garen"} position={"Jungle"} />
        <ChampionCard team="Red" champion={"Garen"} position={"Mid"} />
        <ChampionCard team="Red" champion={"Garen"} position={"ADC"} />
        <ChampionCard team="Red" champion={"Garen"} position={"Support"} />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 800,
        }}
      >
        <ScoreBoard score={3} roundNum={5} />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 800,
        }}
      >
        <ChampionCard team="Blue" champion={"Garen"} position={"Top"} />
        <ChampionCard team="Blue" champion={"Garen"} position={"Jungle"} />
        <ChampionCard team="Blue" champion={"Garen"} position={"Mid"} />
        <ChampionCard team="Blue" champion={"Garen"} position={"ADC"} />
        <ChampionCard team="Blue" champion={"Garen"} position={"Support"} />
      </div>
    </div>
  );
};

const MatchView = () => {
  return (
    <div style={{ position: "absolute" }}>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "rgba(217, 217, 217, 0.01)",
          backdropFilter: "blur(15px)",
        }}
      />
      <RoundMatchCountBar roundNum={3} matchNum={5} />
      <TenChampionTemplate />
      {/* <RoundUpMessage data={undefined} roundNum={10} /> */}
    </div>
  );
};

export default MatchView;
