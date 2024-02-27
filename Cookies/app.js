require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const Student = require("./models/student");
const bcrypt = require("bcrypt");
const saltRounds = 12; // 8, 10, 12, 14

/**
 * 模擬登出登入流程
 * 連結資料庫
 * 建立帳號密碼
 * 嘗試登入(可故意輸入錯誤)
 * 登出(嘗試登出之後查看祕密route)
 */

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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.MYCOOKIESECRET));
app.use(
  session({
    secret: process.env.MYSESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

const verifyUser = (req, res, next) => {
  if (req.session.isVerified) {
    next();
  } else {
    return res.send("請先登入系統");
  }
};

app.get("/students", async (req, res) => {
  let foundStudent = await Student.find({}).exec();
  return res.send(foundStudent);
});

app.post("/students", async (req, res) => {
  try {
    let { username, password } = req.body;
    let hashValue = await bcrypt.hash(password, saltRounds); // npm 的 bcrypt函式
    let newStudent = Student({ username, password: hashValue });
    let savedStudent = await newStudent.save();
    return res.send({ message: "成功新增學生", savedStudent });
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.post("/students/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    let foundStudent = await Student.findOne({ username }).exec(); // 將找到的信箱(帳號) 丟給foundStudent
    if (!foundStudent) {
      return res.send("信箱錯誤。查無使用者");
    } else {
      let result = await bcrypt.compare(password, foundStudent.password); // npm 的 bcrypt函式 確認密碼
      if (result) {
        req.session.isVerified = true;
        return res.send("登入成功!");
      } else {
        return res.send("登入失敗");
      }
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.post("/stuents/logout", (req, res) => {
  req.session.isVerified = false;
  return res.send("已成功登出");
});

app.get("/secret", verifyUser, (req, res) => {
  return res.send("祕密是 比熊很可愛");
});

app.listen(3000, () => {
  console.log("伺服器監聽中.. port 3000");
});
