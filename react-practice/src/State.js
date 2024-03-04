import React, { useState } from "react";
// 使用state,必須要import {useState}

// state狀態
const State = () => {
  let [name, setName] = useState("Kathy");
  let age = 18;
  let [pet, setPet] = useState("Cola");

  const changeNameHandler = () => {
    setName("Kathy女士");
    setPet("可樂小饅頭");
  };
  return (
    <div className="state">
      <h1>女朋友名稱:{name}</h1>
      <h1>女朋友年齡:{age}</h1>
      <h1>寵物名稱:{pet}</h1>
      <button onClick={changeNameHandler}>改名的按鈕</button>
    </div>
  );
};

export default State;
