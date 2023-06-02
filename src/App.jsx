import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("sun");
  const [numeroIngresado, setNumeroIngresado] = useState("");
  const [numeros, setNumeros] = useState([""]);

  const handleClick = () => {
    setNumeros([...numeros, numeroIngresado]);
    console.log(numeros);
  };

  const handleInput = (e) => {
    setNumeroIngresado(e.target.value);
  };

  return (
    <>
      <Header theme={theme} setTheme={setTheme}></Header>
    </>
  );
}

export default App;
