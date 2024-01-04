// const mqtt = require("mqtt");
const options = {
  username: "leon-Iot",
  password: "Iot5120188",
};

// connect to your cluster, insert your host name and port
const client = mqtt.connect(
  "wss://452ea899804642ff99723ac83a00212a.s2.eu.hivemq.cloud:8884/mqtt",
  options
);

// prints a received message
client.on("message", function (topic, message) {
  // console.log("Received message:" + String.fromCharCode.apply(null, message)); // need to convert the byte array to string
  let data = JSON.parse(String.fromCharCode.apply(null, message));
  console.log(data);

  // 在此更新前端數據
  document.getElementById("Irr1").textContent = data.Irr;
  document.getElementById("temperature1").textContent = data.Temp;
  document.getElementById("voltage1").textContent = data.valtage;

  document.getElementById("Irr2").textContent = data.Irr2;
  document.getElementById("temperature2").textContent = data.Temp2;
  document.getElementById("voltage2").textContent = data.valtage2;

  document.getElementById("Irr3").textContent = data.Irr3;
  document.getElementById("temperature3").textContent = data.Temp3;
  document.getElementById("voltage3").textContent = data.valtage3;

  document.getElementById("time").textContent = data.date;
  console.log(data.date);
});

// reassurance that the connection worked
client.on("connect", () => {
  console.log("Connected!");
  let status = document.querySelector(".status");
  let online = document.querySelector(".online");
  status.style.backgroundColor = "lightgreen";
  online.textContent = "Online";
});

// prints an error message
client.on("error", (error) => {
  console.log("連線失敗");
  console.log("Error:", error);
  let status = document.querySelector(".status");
  let online = document.querySelector(".online");
  online.textContent = "Offline";
  status.style.backgroundColor = "red";
});

// subscribe and publish to the same topic
client.subscribe("Wis_01");
// client.publish("front_01", "Hello, this message was received!");
