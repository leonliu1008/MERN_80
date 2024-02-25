const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("這是首頁");
});

app.get("/setCookie", (req, res) => {
  res.cookie("youtCookie", "Oreo");
  return res.send("已經設置Cookie..");
});

app.get("/seeCookie", (req, res) => {
  console.log(req.cookies);
  return res.send("看一下已經設定好的Cookie..");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
