let langauges2 = ["Java", "C++", "Python", "JavaSctipt"];

let result2 = langauges2.map((lang) => lang.toUpperCase()); // 簡化箭頭函式 就不需要輸入return

console.log(result2);

const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let result = languages.map((lang) => {
  return lang.name.toUpperCase();
});

console.log(result);

let result3 = languages.find((lang) => {
  return lang.popularity > 9.5;
});
console.log(result3);

console.log("****filter*****");

let result4 = languages.filter((lang) => {
  return lang.rating >= 9.2;
});

console.log(result4);

console.log("****some, every*****");

let result5 = languages.some((lang) => {
  return lang.popularity < 6;
});
console.log(result5);

let result6 = languages.every((lang) => {
  return lang.popularity > 5;
});
console.log(result6);
