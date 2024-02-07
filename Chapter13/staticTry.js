const express = require("express");
const app = express();

// 使用靜態文件(給html讀css)
app.use(express.static("public")); // 使用的是相對路徑

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/indexTry.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
