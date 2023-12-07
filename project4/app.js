let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector(".animation-wrapper");

//  這一行創建了一個新的 GSAP 的 TimelineMax
const time_line = new TimelineMax();

/**
 * ease: Power2.easeInOut 是一種 GSAP 中的緩動函式
 * 它定義了動畫的時間間隔內，屬性值的變化速度
 * 它提供了一個慢-快-慢的效果，也就是在動畫初始和結尾時速度較慢，在中間時加速變化
 * 然後再放慢變化速度。
 * 這種緩動函式可以讓動畫看起來更自然，而不是一成不變的線性變化。
 */

//  parameter1 是要控制的前端對象 ->hero
//  parameter2 是duration   ->1(表示動畫持續的時間)
//  parameter3 是控制動畫的起始屬性狀態 ->height
//  parameter4 是控制對象的動畫結束後的狀態 -?height
//  parameter5 控制動畫進場時間
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "60%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { width: "0%" },
    { width: "100%", ease: Power2.easeInOut },
    "-=1.2" // -=1.2 使此動畫提早1.2秒開始
  )
  .fromTo(animation, 0.2, { opacity: 1 }, { opacity: 0 }); // opacity=0 >>完全透明

/**
 * pointerEvents禁用 animation 元滑鼠事件
 * 元素不會再接收到滑鼠事件，這樣就可以讓其他元素在此時成為可點擊的對象
 */
//  設定2500毫秒(動畫跑完的時間) 執行此函式
setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

/**
 *  偵測鍵盤按鈕,避免按在input元素 按下Enter之後傳送後端
 */
addEventListener("keypress", (e) => {
  //console.log(e); //  印出了 e，也就是事件物件
  if (e.key == "Enter") {
    e.preventDefault(); //  阻止預設的行為
  }
});

//  防治FORM內部BUTTON交出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

/**
 * 選擇select內的OPTION,會改變相對應顏色
 */
//  選擇select內的OPTION,會改變相對應顏色
let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    // console.log(e.target);         //  target 就是select
    // console.log(e.target.value);   // value 就是target裡面所選擇的項目
    setGPA();
    changeColor(e.target);
  });
});

/**
 * 改變credis(學分數),總計算的值也要跟著改變
 */
let credits = document.querySelectorAll(".class-credit");
credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA();
  });
});

let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {});
/**
 *    function
 */
//  JavaScript 的 hoisting 特性，它會被提升到程式的頂部,所以上面的forEach可以呼叫以下函式
//  選擇好學分 改變背景顏色
const changeColor = (target) => {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C+" ||
    target.value == "C" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D+" ||
    target.value == "D" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (
    target.value == "F+" ||
    target.value == "F" ||
    target.value == "F-"
  ) {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
  }
};

const convertor = (grade) => {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
};

//  計算學分數 與 成績 的 加成
const setGPA = () => {
  let formLength = document.querySelectorAll("form").length; //  找form標籤的長度
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");
  let sum = 0; //  GPA計算用分子
  let credisSum = 0; //  GPA計算用分母

  for (let i = 0; i < credits.length; i++) {
    //  判斷得到的數字是否為NaN
    if (!isNaN(credits[i].valueAsNumber)) {
      credisSum += credits[i].valueAsNumber;
    }
    // console.log(credits[i].valueAsNumber);
  }
  // console.log(credisSum); //學分數
  // console.log(formLength); //科目數量
  for (let i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      sum += credits[i].valueAsNumber * convertor(selects[i].value);
    }
  }
  console.log("sum: " + sum);
  console.log("credisSum: " + credisSum);
  let result;
  //  因為0 除 0 會顯示NaN,所以直接將 result 顯示0.0 ,就不會進行計算
  if (credisSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / credisSum).toFixed(2); // 只取小數第二位
  }
  console.log(result);
  document.getElementById("result-gpa").innerText = result;
};
