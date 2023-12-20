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

/**
 * 新增form 的按鈕
 */
let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader"); // 將class 命名為 grader

  //  製作5個元素
  //  5個元素--1
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  // newInput1.style.width = "24%";
  newInput1.classList.add("class-type");
  //  5個元素--2
  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.classList.add("class-number");
  //  5個元素--3
  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA(); // 因新增了一個課程,所以成績要重新計算
  });

  //  5個元素--4
  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  //  newSelect 裡面新增option
  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  //  5個元素--5(垃圾桶)
  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fas", "fa-trash"); // 因Itag的class="fas fa-trash"

  //  監聽新增垃圾桶按鈕的事件
  newButton.addEventListener("click", (e) => {
    e.preventDefault(); // 避免按下按鈕交出整個網頁至後端
    // 將父元素的父元素 指定一個叫"scaleDown"的動畫效果
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend", //  監聽css裡面的"動畫事件"是否完成(@keyframes)
      () => {
        // console.log("執行");
        e.target.parentElement.parentElement.remove();
        setGPA();
      }
    );
  });

  //  新增 必須注意DOM的建立順序
  newButton.appendChild(newItag);
  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);
  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards"; //使用scss裡面的scaleUp動畫(由小變大)
});

/**
 * 建立 刪除form的按鈕
 * 刪除時出現縮小動畫
 * 並重新計算一次成績
 */
let allTrash = document.querySelectorAll(".trash-button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    // console.log(e.target.parentElement.parentElement); //可檢查選取的parentElement
    // 將父元素的父元素 新增一個 名為remove的class (這樣在css 那邊寫一個.remove 即可馬上影響)
    e.target.parentElement.parentElement.classList.add("remove");
    // 選取到的父元素刪除 (因程式跑很快,會直接刪除,而看不到縮小動畫,所以要再寫addEventListener)
    e.target.parentElement.parentElement.addEventListener(
      "transitionend", //  transitionend = 當CSS 過度完成時觸發
      () => {
        e.target.parentElement.parentElement.remove();
        setGPA();
      }
    );
  });
});

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
  // console.log("sum: " + sum);
  // console.log("credisSum: " + credisSum);
  let result;
  //  因為0 除 0 會顯示NaN,所以直接將 result 顯示0.0 ,就不會進行計算
  if (credisSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / credisSum).toFixed(2); // 只取小數第二位
  }
  // console.log(result);
  document.getElementById("result-gpa").innerText = result;
};

/**
 * 排序演算法
 */
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending"); // 大到小
});
btn2.addEventListener("click", () => {
  handleSorting("ascending"); //  小到大
});

//  建立升序降序控制前端網頁的函式
const handleSorting = (direction) => {
  let graders = document.querySelectorAll("div.grader");
  let objectArray = [];

  for (let i = 0; i < graders.length; i++) {
    console.log(graders[i]);
    let class_name = graders[i].children[0].value; //  只要從.value 抓回來的資料都是string
    let class_number = graders[i].children[1].value;
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;
    // console.log(typeof class_name, class_number, class_credit, class_grade);
    if (
      //  檢查欄位有沒有空,有空的就不進行排序
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      //  將for迴圈裡面 "非空值"所讀到的children,放到class_object之後,在放到上面宣告的物件
      objectArray.push(class_object);
    }
  }

  // console.log(objectArray.length); //顯示的長度只會是"非空值"的object
  // console.log(objectArray);

  //  取得object array之後,可將成績Stirng 換成 "數字"
  for (let i = 0; i < objectArray.length; i++) {
    // console.log(objectArray[i].class_grade);
    //  在物件新增 class_grade_number屬性 並且 賦值
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
  }
  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse(); // 將陣列順序反轉
  }
  console.log(objectArray); //  檢查class_grade_number屬性 升序或降序
  //  根據object array 的內容 來更新網頁
  let allInputs = document.querySelector(".all-inputs");
  allInputs.innerHTML = ""; //  HTML 元素的內容設置為空字串
  console.log(objectArray.length);
  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
    <div class="grader">
      <input
        type="text"
        placeholder="class category"
        class="class-type"
        list="opt"
        value=${objectArray[i].class_name}
      /><!--
      --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value=${objectArray[i].class_number}
      /><!--
      --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="class-credit"
        value=${objectArray[i].class_credit}
      /><!--
      --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
      ><!--
      --><button class="trash-button">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </form>`;
  }
  //  因為SELECT 可直接用JS去更改(無法使用`${}`)
  graders = document.querySelectorAll("div.grader"); // 因為上一行 已經使用forLoop改變一次allInputs了
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade; // children[3]=SELECT的值
  }

  //  select 事件監聽
  allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  //  credit 事件監聽
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    credit.addEventListener("change", () => {
      setGPA();
    });
  });

  //  垃圾桶
  let allTrash = document.querySelectorAll(".trash-button");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });
};

const merge = (a1, a2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
};

const mergeSort = (arr) => {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
};

/**
 * JS 快速宣告物件的簡易寫法
 */
// let name = "Leon";
// let age = 37;
// let Leon = { neme, age }; //  簡易宣告

// // 一般宣告
// let Leon = {
//   neme: neme,
//   age: age,
// };
