const host = "452ea899804642ff99723ac83a00212a.s2.eu.hivemq.cloud";
const port = 8883;
const clientID = "clientID"; // 替換為您的客戶端 ID
const username = "leon-Iot";
const password = "Iot5120188";
const topic = "Wis_01";

const client = new Paho.MQTT.Client(host, Number(port), clientID);

// 設置用戶名和密碼
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({
  onSuccess: onConnect,
  userName: username,
  password: password,
});

// 連接成功的回調函數
function onConnect() {
  console.log("Connected");
  client.subscribe(topic);
}

// 連接斷開的回調函數
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Connection lost: " + responseObject.errorMessage);
  }
}

// 收到訊息的回調函數
function onMessageArrived(message) {
  console.log("Received message:", message.payloadString);
  // 在這裡處理訊息，例如更新前端數據
}
