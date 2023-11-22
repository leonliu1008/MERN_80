const position = (str) => {
  if (str.length == 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }
  return false;
};

console.log(position("LEON"));
console.log(position("ldw"));
console.log(position("Leon"));
console.log(position("kathy"));
console.log(position("KATHY"));
console.log(position("JIOJOIJi"));
