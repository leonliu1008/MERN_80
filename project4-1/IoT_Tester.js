// 引入 AWS JavaScript SDK
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.974.0.min.js"></script>;

// 設定 AWS 身份池相關設定
AWS.config.region = "us-east-1"; // AWS 區域
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:c3a5a383-1c5d-4b8f-9339-3b2cfe38d4ed", // 身份池 ID
});

// 創建 IoT 服務物件
const iot = new AWS.Iot();

// 設定 MQTT 訂閱參數
const params = {
  topic: "Wis_01", // 要訂閱的主題名稱
};

// 訂閱 MQTT 主題
iot.subscribe(params, (err, data) => {
  if (err) {
    console.error("Subscription failed:", err);
  } else {
    console.log("Subscribed successfully:", data);
    // 訂閱成功後，可以在這裡加上相應的處理邏輯
  }
});
