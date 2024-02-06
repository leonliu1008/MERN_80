const express = require("express");
const app = express();

/**
 * (全局中間件)放在app.use 可以強制 使用此"API"的人一定會使用
 * (路由中間件)放在app.get 是單單只用在/users 此路由
 */

app.use(loggingMiddle);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", authorUsers, (req, res) => {
  res.send("Users Page");
});

function loggingMiddle(req, res, next) {
  console.log(`${new Date().toISOString}: ${req.originalUrl}`);
}

function authorUsers(req, res, next) {
  if (req.query.admin === "true") {
    console.log("authorUsers Middle");
    return next(); // 在最後一個調用時，添加簡單地 return next()
  } else {
    res.send("ERROR: You must be an admin");
  }
}

app.listen(3000, () => {
  console.log("Server Started");
});
