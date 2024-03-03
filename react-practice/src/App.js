import React, { useState } from "react";
import Nav from "./Nav";
import Info from "./Info";
import Test from "./test";
import State from "./State";
import Students from "./Students";
import Create from "./Create";
import ReadCreate from "./ReadCreate";
import "./styles/style.css";

function App() {
  //2.State Lifting(從Create.js得到值)
  let [messages, setMessage] = useState([]);

  const someValue = (a, b) => {
    return a + b;
  };
  let friends = ["Phil", "Win", "Johnson"];
  let family = ["Kem", "Chris", "Kathy"];
  let myFriend1 = "Yeh";
  let myFriend2 = "Win";
  let studentArr = [
    { name: "Rolly", age: 39 },
    { name: "Tina", age: 39 },
    { name: "Jessie", age: 29 },
  ];
  const buttonHandler = (msg) => {
    alert(msg);
  };
  const buttonHandler2 = () => {
    alert("第二種寫法測試");
  };
  return (
    <div className="info">
      {/* 使用props的方式傳遞來自Create.js的值 */}
      <Create messages={messages} setMessage={setMessage} />
      {/* 4.最後Creat.js->App.js->readCreate.js */}
      <ReadCreate messages={messages} setMessage={setMessage} />
      <h1>這是app.js的h1標籤</h1>
      <Nav />
      <Info />
      <h1>{Math.random()}</h1>
      <h2>{someValue(5, 4)}</h2>
      <p>我的朋友是:</p>
      {friends.map((friend) => (
        <p>{friend}</p>
      ))}
      <p>{family}</p>
      <Test />
      <Info name={myFriend1} />
      <Info name={myFriend2} age={50} />
      <Info name={friends[0]} age={40} />
      {studentArr.map((student) => (
        <Students name={student.name} age={student.age} />
      ))}
      <button
        onClick={() => {
          buttonHandler("今天天氣不錯");
        }}
      >
        按我一下
      </button>
      <button onClick={buttonHandler2}>按鈕2號</button>
      <State />
    </div>
  );
}

export default App;
