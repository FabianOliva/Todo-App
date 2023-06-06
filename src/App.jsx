import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("sun");

  return (
    <div
      className="Main_Cont"
      style={{ backgroundColor: theme === "sun" ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)" }}>
      <Header theme={theme} setTheme={setTheme} style></Header>
    </div>
  );
}

export default App;
