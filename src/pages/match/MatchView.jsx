import ChampionCard from "../../component/championCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function BeforeMatchCard({history, index}){
  if (history[index] === undefined){
    return;
  }
  const winTeam = history[index].win === history[index].my_team ? 1:0;
  return (
    <div style={{ width: "100%", height: 100}}>
      <div
        style={{
          width: "100%",
          height: 100,
          borderRadius: 8,
          border: "1px black solid",
          background: "linear-gradient(90deg, rgba(105, 129, 255, 0.5) 37%, rgba(255, 116, 116, 0.5) 65%)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
      <div
        style={{
          width: "100%",
          height: 75,
          alignSelf: "center",
          
        }}
      >
        <img
        src={`images/${history[index].blue_team.top.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 0,
            top: 0,
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 0 && history[index].my_role === 0 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].blue_team.jungle.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 92,
            top: 0,
            marginLeft: 5,
            marginRight: 5,

            boxShadow: history[index].my_team === 0 && history[index].my_role === 1 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].blue_team.mid.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 184,
            top: 0,
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 0 && history[index].my_role === 2 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].blue_team.adc.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 276,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 0 && history[index].my_role === 3 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].blue_team.support.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 368,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 0 && history[index].my_role === 4 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <span style={{width: "10%", display: "inline-block"}}>
          <div style={{width: "100%", height: "100%", fontSize: 30, display: "flex", alignItems: "center", justifyContent: winTeam === 0 ? "flex-start" : "flex-end"}}>
            Win
          </div>
        </span>
        <img
        src={`images/${history[index].red_team.top.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 644,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 1 && history[index].my_role === 0 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].red_team.jungle.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 736,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 1 && history[index].my_role === 1 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].red_team.mid.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 828,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 1 && history[index].my_role === 2 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].red_team.adc.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 920,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 1 && history[index].my_role === 3 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
        <img
        src={`images/${history[index].red_team.support.display_name}_squared.jpg`} 
        alt="champion"
          style={{
            width: 75,
            height: 75,
            left: 1012,
            top: 0,
            
            marginLeft: 5,
            marginRight: 5,
            boxShadow: history[index].my_team === 1 && history[index].my_role === 4 ? "0px 0px 25px 10px rgba(0, 0, 0, 1) " : "none",
          }}
        />
      </div>
      </div>
    </div>
  );
}

function useBeforeMatch({ data, team, position }) {
  const [beforeMatch, setBeforeMatch] = useState({
    history: [],
  });
  useEffect(() => {
    const parseHistory = (teamData) => {
      const history = teamData[position]?.history;
      return history;
    }

    if (data) {
      setBeforeMatch({
        history: parseHistory(team === "blue" ? data.match.blue_team : data.match.red_team)
      });
    }
  }, [data, team, position]);

  return beforeMatch;
}

function useParseChampionData(data) {
  const [championNames, setChampionNames] = useState({
    match: 0,
    round: 0,
    blueTeam: {},
    redTeam: {}
  });

  useEffect(() => {
    const parseChampionNames = (teamData) => {
      const positions = ['adc', 'jungle', 'mid', 'support', 'top'];
      const names = {};

      positions.forEach((position) => {
        const championName = teamData[position]?.champ?.display_name;
        if (championName) {
          names[position] = championName;
        }
      });

      return names;
    };

    if (data) {
      setChampionNames({
        round: data.round_a,
        match: data.round_b,
        blueTeam: parseChampionNames(data.match.blue_team),
        redTeam: parseChampionNames(data.match.red_team)
      });
    }
  }, [data]);

  return championNames;
}

const useMatchData = ({authKey, isReload, setIsReload, setGetStatus}) => {
  const [matchData, setMatchData] = useState(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
        axios.post("http://10.20.23.199/api/match/get", { auth_key: authKey }).then(response => {
          setMatchData(
            response.data
          );
          setGetStatus(response.status);
          console.log(response.data);
        }).catch (error => {
          if (error.response) {
            console.log('Error status:', error.response.status);
            setGetStatus(error.response.status);
          } else if (error.request) {
            console.log('No response received:', error.request);
          } else {
            console.log('Error', error.message);
          }
      });
    };
    if (isReload){
    fetchData();
  setIsReload(false);}
  }, [authKey, isReload, setIsReload, setGetStatus]);


  return matchData;
};

const RoundUpMessage = ({ data, roundNum, matchNum, vis, setVis }) => { 

  if (data === 200 && roundNum !== 10 && matchNum === 1 && roundNum > 1) { 
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          visibility: vis ? "visible" : "hidden",
        }}
      >
        <div
          style={{
            width: "70%",
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
            onClick={() => setVis(false)}
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
  } else if (data === 404) { // 404
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "80%",
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
  } else if (data === 403){ // 403
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "80%",
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

const ScoreBoard = ({ authKey, setIsReload }) => {
  const [score, setScore] = useState(0);
  const [roundNum, setRoundNum] = useState(0);

  const handleSubmitData = async ({event, authKey, winNumber}) => {
    try {
      const response = await axios.post("http://10.20.23.199/api/match/submit", { auth_key: authKey, answer: winNumber });
      console.log(response.data);
      setScore(response.data.total_score);
      setRoundNum(response.data.round_b);

      setIsReload(true);
    } catch (error) {
      console.error("Error fetching match data:", error);
    }
    
  };

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
          onClick={ (e) => handleSubmitData({event: e, authKey: authKey, winNumber: 0})}
        >
          <div
            style={{
              color: "black",
              fontSize: "180%",
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
          onClick={(e) => handleSubmitData({event: e, authKey: authKey, winNumber: 1})}
        >
          <div
            style={{
              color: "black",
              fontSize: "180%",
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
          height: "60%",
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
            fontSize: 30,
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

const BeforeMatchView = ({ index, data, isVisible, setIsVisible }) => {
  const parsedData = useParseChampionData(data);
  
  const handleHistoryInVisible = () => {
    setIsVisible([false, false, false, false, false, false, false, false, false, false]);
  };

  let position = "";

  const team = index / 5 < 1 ? "Red" : "Blue";
  switch (index % 5) {
    case 0:
      position = "Top";
      break;
    case 1:
      position = "Jungle";
      break;
    case 2:
      position = "Mid";
      break;
    case 3:
      position = "Adc";
      break;
    case 4:
      position = "Support";
      break;
    default:
      break;
  }
  const champion = index / 5 < 1 ? parsedData.redTeam[position.toLowerCase()] : parsedData.blueTeam[position.toLowerCase()];
  const historyData = useBeforeMatch({data: data, team: team.toLowerCase(), position: position.toLowerCase()});


  return (<div
    style={{
      width: "90vw",
      height: "90vh",
      position: "absolute",
      top: "5vh",
      left: "5vw",
      background: "rgba(255, 255, 255, 0.90)",
      borderRadius: 8,
      border: "3px black solid",
      backdropFilter: "blur(40px)",
      display: "flex",
      paddingTop: 40,
      flexDirection: "column",
      justifyContent: "flex-start",
      visibility: isVisible[index] ? "visible" : "hidden",
    }}
  onClick={() => handleHistoryInVisible()}
  >
    <div
      style={{
        width: "100%",
        textAlign: "left",
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{marginLeft: 50,
        marginBottom: 20,
        left: 50,
        color: "rgba(132.81, 132.81, 132.81, 0.80)",
        fontSize: 32,
        fontFamily: "Pretendard",
        fontWeight: "700",
        wordWrap: "break-word",}}>Current Pick:</div>
      <div></div>
      <div style={{textAlign: "right", marginRight: 70, fontSize: 24,
        fontFamily: "Pretendard",
        fontWeight: "300", whiteSpace: "pre-wrap"}}>{"아래는 해당 플레이어의 대전 기록입니다.\n그림자가 있는 초상화는 해당 플레이어의 포지션을 나타냅니다."}</div>
    </div>
    <div
      style={{
        width: 163,
        height: 24,
        marginLeft: 16,
        color: team === "Red" ? "#A13F3F" : "#001D82",
        fontSize: 20,
        fontFamily: "Pretendard",
        fontWeight: "600",
        wordWrap: "break-word",
      }}
    >
      {`Team ${team}`}
    </div>
    <div style={{ width: "100%", height: 48, textAlign: "left", marginLeft: 50,}}>
      <span style={{color: 'black', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>
        {position}
      </span>
      <span style={{color: 'black', fontSize: 48, fontFamily: 'Pretendard', fontWeight: '300', wordWrap: 'break-word'}}>
        {" "}
        {champion}
      </span>
    </div>
    <div style={{width: "90%", height: "70%", overflowX: "hidden", overflow: "auto", border: "1px solid black", alignSelf: "center", marginTop:60, justifySelf:"center"}}>
    {Array.from({ length: 10 }, (k, index) => (
      <BeforeMatchCard history={historyData.history} key={index} index={index} />

      ))}
    </div>
  </div>);
};

const TenChampionTemplate = ({blueTeamData, redTeamData, authKey, setIsReload, handleHistoryVisible}) => {
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
        <ChampionCard team="Red" champion={redTeamData.top} position={"Top"} F={() => handleHistoryVisible(0)}/>
        <ChampionCard team="Red" champion={redTeamData.jungle} position={"Jungle"} F={() => handleHistoryVisible(1)}/>
        <ChampionCard team="Red" champion={redTeamData.mid} position={"Mid"} F={() => handleHistoryVisible(2)}/>
        <ChampionCard team="Red" champion={redTeamData.adc} position={"Adc"} F={() => handleHistoryVisible(3)}/>
        <ChampionCard team="Red" champion={redTeamData.support} position={"Support"} F={() => handleHistoryVisible(4)}/>
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
        <ScoreBoard authKey={authKey} setIsReload={setIsReload}/>
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
        <ChampionCard team="Blue" champion={blueTeamData.top} position={"Top"} F={() => handleHistoryVisible(5)}/>
        <ChampionCard team="Blue" champion={blueTeamData.jungle} position={"Jungle"} F={() => handleHistoryVisible(6)}/>
        <ChampionCard team="Blue" champion={blueTeamData.mid} position={"Mid"} F={() => handleHistoryVisible(7)}/>
        <ChampionCard team="Blue" champion={blueTeamData.adc} position={"Adc"} F={() => handleHistoryVisible(8)}/>
        <ChampionCard team="Blue" champion={blueTeamData.support} position={"Support"} F={() => handleHistoryVisible(9)}/>
      </div>
    </div>
  );
};

const MatchView = () => {
  const [isReload, setIsReload] = useState(true);
  const [getStatus, setGetStatus] = useState(0);
  const [historyVisible, setHistoryVisible] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [messageVis, setMessageVis] = useState(true);

  const handleHistoryVisible = (index) => {
    setHistoryIndex(index);
    setHistoryVisible(prev => {
      return prev.map((item, idx) => idx === index ? !item : item);
    });
  };

  let location = useLocation();
  const { auth } = location.state;

  const rawData = useMatchData({authKey: auth, isReload: isReload, setIsReload: setIsReload, setGetStatus: setGetStatus});

  const parsedData = useParseChampionData(rawData);
  
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
      <RoundMatchCountBar roundNum={parsedData.round} matchNum={parsedData.match} />
      <TenChampionTemplate blueTeamData={parsedData.blueTeam} redTeamData={parsedData.redTeam} authKey={auth} isReload={isReload} setIsReload={setIsReload} handleHistoryVisible={handleHistoryVisible}/>
      <BeforeMatchView data={rawData} champion={"Garen"} index={historyIndex} isVisible={historyVisible} setIsVisible={setHistoryVisible} />
      <RoundUpMessage data={getStatus} roundNum={parsedData.round} matchNum={parsedData.match} vis={messageVis} setVis={setMessageVis}/>
    </div>
  );
};

export default MatchView;
