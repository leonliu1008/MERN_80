const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/name/:name", (req, res) => {
  let { name } = req.params;
  // JS中 出現object 屬性與variable相同的狀況
  res.render("index", { name }); // 使用ejs讀views裡面的index.ejs
});

app.get("/ejsTry", (req, res) => {
  let name = "leon";
  let myString = "<h3>Hello World</h3>";
  res.render("index", { myString, name });
});

// port, callback
app.listen(3000, () => {
  console.log("伺服器啟動,Port:3000....");
});
