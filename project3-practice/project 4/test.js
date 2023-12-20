let result;
sum = 0;
cSum = (0.0).toFixed(2);
if (sum == 0) {
  result = (0.0).toFixed(2);
  console.log(result);
} else {
  result = sum / cSum;
}

console.log(result);

/**
 * 練習寫function
 */
let allSelects = document.querySelectorAll(".change");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    changeColor(e.target);
  });
});

const changeColor = (target) => {
  if (target.value == "A") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B" ||
    target.value == "B-"
  ) {
    target.value.backgroundColor = "yellow";
    target.value.color = "black";
  }
};
