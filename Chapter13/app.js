const express = require("express");
const app = express(); // 會return一個物件,將物件宣告為app
const port = 3000;

// middlewares
app.use((req, res, next) => {
  console.log("正在經過middleware");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request, GET,  POST, PUT, DELETE
app.get("/", (req, res) => {
  res.send("歡迎到Express伺服器首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("這是另外一個頁面");
});

app.get("/example", (req, res) => {
  // ****錯誤範例****
  // res.send("<h1>這是一個h1標籤<h1>"); // 已經在express跑一次header
  // res.send("<p>這是一個段落<p>"); // 這邊又跑一次header 所以會產生錯誤(所以要寄html內容,會使用fs)
  // ****正確為:直接傳檔案****
  res.sendFile(__dirname + "/index.html");
});

app.get("/example2", (req, res) => {
  let obj = {
    title: "Web Design",
    website: "udemy",
  };
  res.json(obj);
});

// res.redirect
app.get("/example3", (req, res) => {
  // 預設302,重新導向
  console.log("重新導向");
  res.redirect("/actualExample");
});

app.get("/actualExample", (req, res) => {
  res.send("真正的資源與頁面在這");
});

// req.params
app.get("/fruit/:someFruit", (req, res) => {
  console.log(req.params);
  res.send(`歡迎來到 ${req.params.someFruit} 頁面`);
});

// req.query 取得前端資料,在前端的<form action="/formHandling></form>
app.get("/formHandling", (req, res) => {
  console.log(req.query);
  res.send(
    `伺服器已收到表單,所提交的資料為,名稱:${req.query.name};年齡為:${req.query.age}`
  );
});

/**
 * 因沒有轉type 所以會得到undefined,所以要使用app.use
 * app.use(express.json());
 * app.use(express.urlencoded());
 */
// req.body 使用app.posts
app.post("/address", (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  res.send(`你的email設定為:${email}`);
});

// 防止網址錯誤(一定要放在所有Router的最下面)
app.get("*", (req, res) => {
  // return res object
  res.status(404).send("<h1>404 你所找的頁面不存在<h1>");

  // 可防止進入404之後其他代碼不會被運行
  // return res.status(404).send("<h1>404 你所找的頁面不存在<h1>");
});

app.listen(port, () => {
  console.log(`啟動Express伺服器,port: ${port}`);
});
