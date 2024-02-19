const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/languages", (req, res) => {
  const languages = [
    { name: "LabView", rating: 6.8, popularity: 6, trending: "normal" },
    { name: "Python", rating: 9.6, popularity: 9.7, trending: "super hot" },
    { name: "JS", rating: 8.8, popularity: 8.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 6, trending: "decreasing" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  ];
  res.render("index", { languages });
});

app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

app.listen(3000, () => {
  console.log("伺服器啟動中 port:3000...");
});
