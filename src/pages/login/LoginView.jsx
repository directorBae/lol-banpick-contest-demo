import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DescriptionWindow = ({ submitStatus, navigator, authKey }) => {
  return (
    <div
      style={{
        visibility: submitStatus === 200 ? "visible" : "hidden",
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          color: "rgba(37.19, 37.19, 37.19, 0.80)",
          fontSize: 32,
          fontFamily: "Pretendard",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        게임 방법
      </div>
      <div
        style={{
          width: "100%",
          color: "#252525",
          fontSize: 32,
          fontFamily: "Pretendard",
          fontWeight: "300",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        {
          "여러분은 롤 게임의 챔프 픽을 보게 됩니다.\n\n이때 챔프를 클릭하면 해당 게이머의 이전 10게임의 전적을 볼 수 있습니다.\n\n여러분은 해당 정보를 보고 해당 게임에서 블루 팀이 이겼을지, 레드 팀이 이겼을지를 예측하면 됩니다. \n\n한 라운드에 대해 예측률이 50%를 넘지 못할 경우 다음 라운드에 진출할 수 없습니다."
        }
      </div>
      <div style={{ width: 529, height: 99, position: "relative" }}>
        <div
          style={{
            width: 529,
            height: 99,
            background:
              "linear-gradient(155deg, rgba(0, 25.50, 255, 0.15) 0%, rgba(255, 0, 0, 0.15) 100%)",
            borderRadius: 8,
            border: "1px black solid",
            textAlign: "center",
            color: "white",
            fontSize: 32,
            fontFamily: "Pretendard",
            fontWeight: "700",
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigator("match", { state: { auth: authKey } })}
        >
          예측 시작하기
        </div>
      </div>
    </div>
  );
};

const SubmitForm = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lolNickname, setLolNickname] = useState("");
  const [studentId, setStudentId] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [authKey, setAuthKey] = useState("");

  const handleSubmit = async (e) => {
    if (username === "" || phoneNumber === "" || studentId === "") {
      return;
    }
    e.preventDefault();
    const response = await fetch("http://10.20.23.72/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        phone_number: phoneNumber,
        riot_id: lolNickname,
        student_id: studentId,
      }),
    });
    setResponseStatus(response.status);
    const responseJson = await response.json();
    setAuthKey(responseJson.key);
  };

  return {
    username,
    setUsername,
    phoneNumber,
    setPhoneNumber,
    lolNickname,
    setLolNickname,
    studentId,
    setStudentId,
    responseStatus,
    setResponseStatus,
    authKey,
    setAuthKey,
    handleSubmit,
  };
};

const LoginView = () => {
  const navigate = useNavigate();
  let {
    username,
    setUsername,
    phoneNumber,
    setPhoneNumber,
    lolNickname,
    setLolNickname,
    studentId,
    setStudentId,
    responseStatus,
    setResponseStatus,
    authKey,
    setAuthKey,
    handleSubmit,
  } = SubmitForm();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.01)",
        boxShadow: "0px 0px 112.5px 44px rgba(255, 255, 255, 0.25) inset",
        borderRadius: 8,
        backdropFilter: "blur(30px)",
        fontFamily: "Pretendard",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        position: "absolute",
      }}
    >
      <DescriptionWindow
        submitStatus={responseStatus}
        navigator={navigate}
        authKey={authKey}
      />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          visibility: responseStatus === 200 ? "hidden" : "visible",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            width: "30%",
            fontWeight: 600,
            fontSize: 32,
            textAlign: "left",
            marginBottom: 40,
            color: "rgba(24, 24, 24, 0.8)",
          }}
        >
          이름을 입력해주세요
        </div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="홍길동"
          style={{
            fontWeight: 100,
            width: "30%",
            height: 60,
            fontSize: 24,
            marginBottom: 40,
          }}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div
          style={{
            width: "30%",
            fontWeight: 600,
            fontSize: 32,
            textAlign: "left",
            marginBottom: 40,
            color: "rgba(24, 24, 24, 0.8)",
          }}
        >
          학번을 입력해주세요
        </div>
        <input
          type="text"
          maxLength={8}
          id="username"
          name="username"
          placeholder="20240000"
          style={{
            fontWeight: 100,
            width: "30%",
            height: 60,
            fontSize: 24,
            marginBottom: 40,
          }}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <div
          style={{
            width: "30%",
            fontWeight: 600,
            fontSize: 32,
            textAlign: "left",
            marginBottom: 40,
            color: "rgba(24, 24, 24, 0.8)",
          }}
        >
          전화번호를 입력해주세요
        </div>
        <input
          type="text"
          maxLength={11}
          id="username"
          name="username"
          placeholder="01000000000"
          style={{
            fontWeight: 100,
            width: "30%",
            height: 60,
            fontSize: 24,
            marginBottom: 40,
          }}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <div
          style={{
            width: "30%",
            fontWeight: 600,
            fontSize: 32,
            textAlign: "left",
            marginBottom: 40,
            color: "rgba(24, 24, 24, 0.8)",
          }}
        >
          롤 닉네임을 입력해주세요
        </div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Hide on Bush#KR1 (반드시 태그까지 입력)"
          style={{
            fontWeight: 100,
            width: "30%",
            height: 60,
            fontSize: 24,
            marginBottom: 40,
          }}
          onChange={(e) => setLolNickname(e.target.value)}
        />
        <button
          style={{
            width: "30%",
            height: 80,
            boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.15) inset",
            color: "white",
            fontSize: 24,
            fontWeight: 700,
            background:
              "linear-gradient(155deg, rgba(0, 25.50, 255, 0.15) 0%, rgba(255, 0, 0, 0.15) 100%)",
            borderRadius: 8,
            border: "1px black solid",
            cursor: "pointer",
            marginTop: 40,
          }}
          onClick={handleSubmit}
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default LoginView;
