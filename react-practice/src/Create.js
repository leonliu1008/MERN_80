import React, { useState } from "react";

const Create = ({ messages, setMessage }) => {
  let [input, setInput] = useState("");
  const submitButtonHandler = (e) => {
    e.preventDefault();
    // 3.下面的input得到值之後
    // [messages, setMessage]<~已經在App.js宣告
    // useState語法,setMessage裡面的值,會設定到messages
    setMessage([...messages, input]);
    setInput("");
  };
  const inputHandler = (e) => {
    // 1.監聽input 改變的事件,執行setInput
    // [input, setInput]
    // useState語法,setInput裡面的值,會設定到input
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} type="text" value={input} />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Create;
