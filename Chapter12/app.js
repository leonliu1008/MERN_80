const http = require("http");

const server = http.createServer((req, res) => {
  // callback function with 2 parameters
});

// server啟動之後,就會一直維持監聽請求
server.listen();
