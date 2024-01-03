import ssl
import paho.mqtt.client as mqtt
import json
from datetime import datetime
import random
import time

# 定義 MQTT Broker 的地址和端口
broker_address = "452ea899804642ff99723ac83a00212a.s2.eu.hivemq.cloud"
broker_port = 8883  # 根據您的 MQTT Broker 設置更改端口

# 建立 MQTT 客戶端實例
client = mqtt.Client("MyPython")  # 可以自訂客戶端ID

# 設置 TLS 上下文
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# 設置用戶名和密碼
client.username_pw_set(username="leon-Iot", password="Iot5120188")

# 連接到 MQTT Broker
client.tls_set_context(ssl_context)
client.connect(broker_address, broker_port)

# 訂閱主題
topic = "Wis_01"
client.subscribe(topic)

# 設定上傳次數
upload_count = 10

for i in range(upload_count):
    # 產生隨機 value 和獲取當前日期和時間
    randomIrr = random.randint(800, 1200)
    randomVal = random.randint(200, 220)
    randomTemp = random.randint(30, 50)
    
    randomIrr2 = randomIrr - 20
    randomVal2 = randomVal - 3
    randomTemp2 = randomTemp - 1

    randomIrr3 = randomIrr - 30
    randomVal3 = randomVal - 2
    randomTemp3 = randomTemp - 2
    current_time = datetime.now()
    date = current_time.strftime("%Y-%m-%d")
    time_now = current_time.strftime("%H:%M:%S")
    dateTime = date + " " + time_now
    data = {
        "device_ID": "das_01",
        "date": dateTime,
        "Temp": str(randomTemp),
        "valtage": str(randomVal),
        "Irr": str(randomIrr),
        "Temp2": str(randomTemp2),
        "valtage2": str(randomVal2),
        "Irr2": str(randomIrr2),
        "Temp3": str(randomTemp3),
        "valtage3": str(randomVal3),
        "Irr3": str(randomIrr3),
    }
    json_data = json.dumps(data)  # 轉換為 JSON 格式

    # 發布訊息到指定主題
    client.publish(topic, json_data)
    
    # 等待2秒再上傳下一次
    time.sleep(2)

# 等待訊息到來（您可以改用其他方式控制程式不要立即斷開）
client.loop_start()
client.loop_stop()

# 斷開 MQTT 連接
print("執行完成")
client.disconnect()