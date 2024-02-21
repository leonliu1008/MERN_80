const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

// middleware
app.use(express.json());
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("成功連結MongoDB!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`伺服器啟動 on port ${port}`);
});
