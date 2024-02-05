const http = require("http");
const fs = require("fs");

// 如果在這邊沒給一個response,那開啟server會一直等待
const server = http.createServer((req, res) => {
  // callback function with 2 parameters
  // console.log(req.headers);
  // console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  console.log(req.url);
  if (req.url == "/myPage") {
    res.write("歡迎來到我的網頁");
    res.end();
  } else if (req.url == "/anotherPage") {
    res.write("這是另外一個頁面");
    res.end();
  } else if (req.url == "/myFile") {
    fs.readFile("./myFile.html", (e, data) => {
      if (e) {
        res.write("存取html文件錯誤..");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("404不存在頁面");
    res.end();
  }
});

// server啟動之後,就會一直維持監聽請求
server.listen(3000, () => {
  console.log("Server已啟動,Port:3000");
});
