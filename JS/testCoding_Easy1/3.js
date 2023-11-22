//  檢查第一個字母是否為大寫
const isUpperCase = (str) => {
  if (str.length == 0) {
    return false;
  }
  return str[0] === str[0].toUpperCase();
};

console.log(isUpperCase("ldw"));
console.log(isUpperCase("Leon"));
console.log(isUpperCase("kathy"));
