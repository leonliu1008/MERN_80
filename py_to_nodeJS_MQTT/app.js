const AWS = require("aws-sdk");
const AWSIoTData = require("aws-iot-device-sdk");
const AWSConfiguration = require("./aws-configuration.js");
// import { AWS } from "aws-sdk";
// import { AWSIoTData } from "aws-iot-device-sdk";
// import { AWSConfiguration } from "./aws-configuration.js";

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
    console.log(data.Irr);

    // Update values with the received AWS IoT MQTT data
    document.getElementById("Irr1").textContent = data.Irr;
    // document.getElementById("temperature").textContent = data.temperature;
    // document.getElementById("voltage").textContent = data.voltage;
    // document.getElementById("time").textContent = data.time;
  });
};

// Initialize AWS IoT Data
const iotData = new AWSIoTData.device({
  region: AWSConfiguration.region,
  host: AWSConfiguration.host,
  clientId: AWSConfiguration.clientId,
  accessKeyId: AWS.config.credentials.accessKeyId,
  secretKey: AWS.config.credentials.secretAccessKey,
  sessionToken: AWS.config.credentials.sessionToken,
  keyPath: "C:/D/key/connect_device_package/IoT_TESTER.private.key", // 設定私鑰路徑
  certPath: "C:/D/key/connect_device_package/IoT_TESTER.cert.pem", // 設定證書路徑
  caPath: "C:/D/key/connect_device_package/root-CA.crt", // 設定CA證書路徑
});

updateValues(iotData);
