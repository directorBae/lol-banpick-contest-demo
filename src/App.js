import MatchView from "./pages/match/MatchView";
import LoginView from "./pages/login/LoginView";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/match" element={<MatchView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
