const isSubsequence = (str1, str2) => {
  if (str1.length == 0) {
    return true;
  }

  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] == str2[j]) {
      i++;
      j++;
    }
    if ((i = str1.length)) {
      return true;
    }
    j++;
  }

  return false;
};

console.log(isSubsequence("", "Hello")); // true
console.log(isSubsequence("book", "brooklyn")); // true
console.log(isSubsequence("CAATCGA", "TCAATCAGGATCCGCTGA")); // true
console.log(isSubsequence("AATTAA", "TCAATCAGGATCCGCTGA")); // false
