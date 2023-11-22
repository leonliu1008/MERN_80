const reverse = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  return result;
};

const palindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] != str[j]) {
      console.log(false);
      return false;
    }
    i++;
    j--;
  }
  console.log(true);
  return true;
};

const palindrome2 = (str) => {
  console.log(str == reverse(str));
  return str == reverse(str);
};

palindrome2("bearaeb"); // returns true
palindrome2("whatever revetahw"); // returns true
palindrome2("Aloha, how are you today?"); // returns false
console.log(reverse("Aloha, how are you today?"));
