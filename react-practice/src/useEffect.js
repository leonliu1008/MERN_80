import React, { useState, useEffect } from "react";
import Class_Component from "./Class_Component";

import "./styles/style.css";

function App() {
  let [myName, setMyName] = useState("Leon Liu");
  const buttonHandler = () => {
    setMyName("leonliu");
  };

  // 使用useEffect,前面放一個function後面放dependencies
  // 網頁被渲染的時候一定會執行一次function(console.log("useEffect內部的function正在被執行");)
  // 若後面的dependencies 被改變的時候,也會再執行一次function
  useEffect(() => {
    console.log("useEffect內部的function正在被執行");
  }, [myName]);

  return (
    <div className="info">
      <Class_Component brand="toyota" />
      <h1>{myName}</h1>
      <button onClick={buttonHandler}>改變姓名</button>
    </div>
  );
}

export default App;
