import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import DuoGamePage from "./Components/GamePage/DueGamePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/play" element={<DuoGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
