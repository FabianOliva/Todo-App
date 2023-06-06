import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "./../public/bg-desktop-light.jpg";
import "./../public/bg-desktop-dark.jpg";

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
