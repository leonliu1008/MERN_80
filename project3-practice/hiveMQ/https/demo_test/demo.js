const startConnect = () => {
  clientID = "clientID - " + parseInt(Math.random() * 100);
  host = document.getElementById("host").value;
  port = document.getElementById("port").value;
  userId = document.getElementById("username").value;
  passwoedId = document.getElementById("password").value;

  document.getElementById("messages").innerHTML +=
    "<span> Connecting to:" + host + "on port" + port + "</span><br>";
  document.getElementById("messages").innerHTML +=
    "<span> Using the client Id:" + clientID + "</span><br>";

  client = new Paho.MQTT.Client(host, Number(port), clientID);

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  client.connect({
    onSuccess: onConnect,
  });
};

const onConnect = () => {
  topic = document.getElementById("topic_s").value;

  document.getElementById("messages").innerHTML +=
    "<span> Subscribing to topic " + topic + "</span><br>";
  client.subscribe(topic);
};

const onConnectionLost = (responseObject) => {
  document.getElementById("messages").innerHTML +=
    "<span> ERROR: Connection is lost." + clientID + "</span><br>";
  if (responseObject != 0) {
    document.getElementById("messages").innerHTML +=
      "<span> ERROR:" + responseObject.errorMessage + "</span><br>";
  }
};

const onMessageArrived = (message) => {
  console.log("onMessageArrived: " + message.payloadSting);
  document.getElementById("messages").innerHTML +=
    "<span> Topic" +
    message.destinationName +
    "| Message : " +
    message.payloadSting +
    "</span><br>";
};

const startDisconnect = () => {};
const publishMessage = () => {};
