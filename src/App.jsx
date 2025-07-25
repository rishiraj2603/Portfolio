import React from "react";
import "./App.css";
import FirstSlide from "./components/firstSlide/FirstSlide";
import SecondSlide from "./components/secondSlide/SecondSlide";
import ThirdSlide from "./components/thirdSlide/ThirdSlide";

const App = () => {
  return (
    <div className="font-style">
      <FirstSlide></FirstSlide>
      <SecondSlide></SecondSlide>
      <ThirdSlide></ThirdSlide>
    </div>
  );
};

export default App;
