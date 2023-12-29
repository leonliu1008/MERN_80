// Function to update values from AWS IoT Core
const updateValues = (device) => {
  device.subscribe("Wis_01", (err) => {
    if (err) {
      console.error("Subscription failed:", err);
    } else {
      console.log("Subscribed to Wis_01");
    }
  });

  device.removeAllListeners("message");

  device.on("message", (topic, payload) => {
    const data = JSON.parse(payload.toString());
    console.log("Received message:", data);

    // Update values with the received AWS IoT MQTT data
    document.getElementById("Irr1").textContent = data.Irr;
    // document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("voltage").textContent = data.voltage;
    // document.getElementById("time").textContent = data.time;
  });
};

// Listen for 'connect' event before updating values
AWS.config.update({
  accessKeyId: "your_access_key_id", // 替換成你的訪問金鑰 ID
  secretAccessKey: "your_secret_access_key", // 替換成你的秘密訪問金鑰
  region: "us-east-1", // 替換成你的 AWS 區域
});

const device = new AWS.IotData({
  endpoint: "a36geamrvk9dtw-ats.iot.us-east-1.amazonaws.com", // IoT端點
});

device.subscribe("Wis_01", (err) => {
  if (err) {
    console.error("Subscription failed:", err);
  } else {
    console.log("Subscribed to Wis_01");
    updateValues(device); // Update values initially

    // Update values every 2 seconds
    setInterval(() => updateValues(device), 2000);
  }
});
