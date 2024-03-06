import React from "react";
import { useState } from "react";

const SubmitForm = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lolNickname, setLolNickname] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:3001/api/submit", {...})
    console.log(username, phoneNumber, lolNickname, studentId);
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
    handleSubmit,
  };
};

const LoginView = () => {
  let {
    username,
    setUsername,
    phoneNumber,
    setPhoneNumber,
    lolNickname,
    setLolNickname,
    studentId,
    setStudentId,
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
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
          required={true}
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
          required={true}
          type="text"
          id="username"
          name="username"
          placeholder="010-0000-0000"
          style={{
            fontWeight: 100,
            width: "30%",
            height: 60,
            fontSize: 24,
            marginBottom: 40,
          }}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          required={true}
          type="text"
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
        />
        <button
          style={{
            width: "30%",
            height: 60,
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.15) inset",
            color: "white",
            fontSize: 24,
            fontWeight: 200,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            marginTop: 80,
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
