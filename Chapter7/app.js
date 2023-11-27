// HTMLCollection,NodeList  are not Array.
// array-like object

let found_el = document.querySelectorAll(".myP");
// return 長度為5的NodeList
console.log(found_el);

let found_el2 = document.querySelectorAll("a.myP");
// return 長度為1的NodeList
console.log(found_el2);

console.log(document.getElementsByClassName("myP"));

console.log(found_el[0]); //  類array,所以可以用index選取項目
console.log(found_el[4]);
console.log(found_el.length); //  類array,可以檢查長度
console.log("===========我是分隔線===================");
/**
 * HTMLCollection 動態 dynamic
 * NodeList 靜態 static
 */

let hellos = document.getElementsByClassName("hello");
let helloss = document.querySelectorAll(".hello");
console.log("hellos.length : " + hellos.length);
console.log("helloss.length : " + helloss.length);

let body = document.querySelector("body");
let p = document.createElement("p"); //  建立一個p tag
p.innerText = "this is a new h1";
p.classList.add("hello");
body.appendChild(p);

console.log("改變DOM之後...");
helloss = document.querySelectorAll(".hello");
console.log("hellos.length : " + hellos.length);
console.log("helloss.length : " + helloss.length);
