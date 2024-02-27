require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const Student = require("./models/student");

mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("成功連結MongoDB!");
  })
  .catch((e) => {
    console.log(e);
  });

// 解析 JSON 數據中間件
app.use(express.json());
app.use(cookieParser(process.env.MYCOOKIESECRET));
app.use(
  session({
    secret: process.env.MYSESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(flash());

const checkUser = (req, res, next) => {
  console.log(req.session.isVerified);
  if (!req.session.isVerified) {
    return res.send("請先登入系統,才能看到祕密");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  req.flash("message", "歡迎來到網頁...");
  res.send("這是首頁" + req.flash("message"));
});

app.get("/setCookie", (req, res) => {
  // res.cookie("youtCookie", "Oreo");
  res.cookie("yourCookie", "Oreo", { signed: true });
  return res.send("已經設置Cookie..");
});

app.get("/seeCookie", (req, res) => {
  console.log(req.signedCookies);
  return res.send("看一下已經設定好的Cookie.." + req.signedCookies.yourCookie);
});

app.get("/setSessionData", (req, res) => {
  // console.log(req.session);
  req.session.example = "something not important....";
  return res.send("在伺服器設置session資料,在瀏覽器設置簽名之後的session id");
});

app.get("/seeSessionData", (req, res) => {
  console.log(req.session); // connect.sid => session id
  return res.send("看一下已經設定好的Session資料");
});

// 模擬登入的狀態

app.get("/verifyUser", (req, res) => {
  req.session.isVerified = true;
  return res.send("你已經被驗證");
});

app.get("/secret", checkUser, (req, res) => {
  return res.send("祕密是:狗狗很可愛");
});

app.get("/secret2", checkUser, (req, res) => {
  return res.send("祕密是:可樂很可愛");
});

app.listen(3000, () => {
  console.log("伺服器監聽中.. port 3000");
});
