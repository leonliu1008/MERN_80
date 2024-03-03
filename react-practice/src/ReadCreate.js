import React from "react";

const ReadCreate = ({ messages, setMessage }) => {
  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>學習內容是:{message}</p>;
      })}
    </div>
  );
};

export default ReadCreate;

// 在React裡面 新增一個Tag,會建議要有一個key,所以使用.map(value,index)
// 這樣就可以把index當作key的名稱
