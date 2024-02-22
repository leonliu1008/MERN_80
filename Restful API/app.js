const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student.js");
const Port = 3000;

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("成功連結MongoDB...");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/students", async (req, res) => {
  try {
    let studentData = await Student.find({}).exec();
    return res.send(studentData);
  } catch (e) {
    return res.status(500).send("尋找資料時,發生錯誤");
  }
});

app.get("/students/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let foundStudent = await Student.findOne({ _id }).exec();
    return res.send(foundStudent);
  } catch (e) {
    return res.status(500).send("尋找資料時,發生錯誤");
  }
});

app.listen(Port, () => {
  console.log(`Server正在聆聽PORT:${Port}`);
});
