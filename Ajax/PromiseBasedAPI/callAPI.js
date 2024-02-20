let output = document.querySelector("#output");

async function hello() {
  try {
    let result = await fetch("https://v2.jokeapi.dev/joke/Dark?type=single");
    let data = await result.json();
    // output.innerHTML += data.joke + "\n";
    output.innerText += data.joke + "\n\n"; // 要有換行功能 必須用innerText
  } catch (e) {
    console.log(e);
  }
}

let button = document.querySelector("#add-joke");
button.addEventListener("click", (e) => {
  hello();
});
