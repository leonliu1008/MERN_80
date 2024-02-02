const fs = require("fs");

// fs.writeFile("myTestFile.txt", "我第一個測試自動寫入文件", (e) => {
//   if (e) throw e;
//   //  如果有錯誤就不會顯示下面log
//   console.log("文件已經撰寫完畢");
// });

fs.readFile("ch12-2/myTestFile.txt", "utf-8", (e, data) => {
  if (e) throw e;
  console.log(`內容為:${data}`);
});
