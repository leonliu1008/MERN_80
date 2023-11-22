//  檢查是否所以字母是否為大寫
const isUpperCase = (str) => {
  if (str.length == 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;

  // 第二種作法
  //   return str == str.toUpperCase();
};

console.log(isUpperCase("LEON"));
console.log(isUpperCase("ldw"));
console.log(isUpperCase("Leon"));
console.log(isUpperCase("kathy"));
console.log(isUpperCase("KATHY"));
console.log(isUpperCase("JIOJOIJi"));
