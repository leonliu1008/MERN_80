const express = require("express");
const app = express();
const fs = require("fs");

app.get("/home", (req, res) => {
  //   console.log("1");
  fs.readFile("./indexTry.html", "utf-8", (err, data) => {
    // console.log("2");
    if (err) {
      console.error("讀取html錯誤:" + err);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("伺服器啟動: http://localhost:3000");
});
