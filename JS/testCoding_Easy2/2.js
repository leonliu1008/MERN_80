const swap = (str) => {
  strChange = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      console.log("轉大寫");
      strChange += str[i].toUpperCase();
    } else if (str[i] != str[i].toLowerCase()) {
      console.log("轉小寫");
      strChange += str[i].toLowerCase();
    }
  }
  console.log(strChange);
};

// swap("Aloha"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."
