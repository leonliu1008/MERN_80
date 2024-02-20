let myKey = "28b0c9d2e58e63fc683e2e02bce571cd";
let city = "Hsinchu";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function weather() {
  try {
    let result = await fetch(url);
    let data = result.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

weather();
