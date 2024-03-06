import MatchView from "./pages/match/MatchView";
import LoginView from "./pages/login/LoginView";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/match" element={<MatchView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
