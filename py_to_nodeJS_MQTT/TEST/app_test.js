const awsIot = require("aws-iot-device-sdk");

// AWS IoT configuration
const device = awsIot.device({
  keyPath: "C:/D/key/connect_device_package/IoT_TESTER.private.key",
  certPath: "C:/D/key/connect_device_package/IoT_TESTER.cert.pem",
  caPath: "C:/D/key/connect_device_package/root-CA.crt",
  clientId: "MyPython",
  host: "a36geamrvk9dtw-ats.iot.us-east-1.amazonaws.com", // IoT端點
});

// Function to update values from AWS IoT Core
const updateValues = () => {
  // Assuming your subscribed topic is 'your_topic'
  device.subscribe("Wis_01", (err) => {
    if (err) {
      console.error("Subscription failed:", err);
    } else {
      console.log("Subscribed to Wis_01");
    }
  });

  // Remove existing 'message' event listeners before adding a new one
  device.removeAllListeners("message");

  // Update values upon successful subscription
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
device.on("connect", () => {
  console.log("Connected to AWS IoT");
  updateValues(); // Update values initially

  // Update values every 2 seconds
  setInterval(updateValues, 2000);
});
