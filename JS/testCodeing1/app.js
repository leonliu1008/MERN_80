const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
console.log(friends);
let arrLength = friends.length;
const newFriends = [];

for (let i = arrLength - 1; i >= 0; i--) {
  console.log(i);
  newFriends.push(friends[i]);
}
console.log(newFriends);
