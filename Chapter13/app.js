const express = require("express");
const app = express(); // 會return一個物件,將物件宣告為app
const port = 3000;

// HTTP request, GET,  POST, PUT, DELETE
app.get("/", (req, res) => {
  res.send("歡迎到Express伺服器首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("這是另外一個頁面");
});

app.listen(port, () => {
  console.log(`啟動Express伺服器,port: ${port}`);
});
