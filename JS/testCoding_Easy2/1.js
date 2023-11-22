// 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。
const reverse = (str) => {
  let resule = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resule += str[i];
  }
  console.log(resule);
};

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"
