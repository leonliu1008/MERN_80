const fs = require("fs");

const readStream = fs.createReadStream("example.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Chunk read:", chunk);

});

readStream.on("end", () => {
  console.log("File reading complete.");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
