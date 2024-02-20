import requests

def get_json(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  
        json_data = response.json()  # 解析 JSON 格式的回應
        return json_data
    except requests.exceptions.RequestException as err:
        print(f"Error: {err}")
        return None

# API 網址
api_url = "https://v2.jokeapi.dev/joke/Dark"

result = get_json(api_url)

if result is not None:
    print(result)
