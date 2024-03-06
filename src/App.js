import MatchView from "./pages/match/MatchView";
import LoginView from "./pages/login/LoginView";
import "./App.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "rgba(217, 217, 217, 0.01)",
          backdropFilter: "blur(15px)",
        }}
      />
      <LoginView />
      {/* <MatchView /> */}
    </div>
  );
}

export default App;
