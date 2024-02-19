let balance = 0; // shared resouece

const randomDelay = () => {
  // return value is a Promise
  // and the time for this promise changing from pending to fulfilled
  // is random (0s-0.1s)
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
};

async function loadBalance() {
  await randomDelay(); // 等待隨機的時間
  return balance;
}

async function saveBalance(value) {
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  const balance = await loadBalance();
  console.log(`賣葡萄之前,帳戶金額為: ${balance}`);
  const newBalance = balance + 50;
  await saveBalance(newBalance);
  console.log(`賣葡萄之後,帳戶金額為: ${newBalance}`);
}

async function sellApple() {
  const balance = await loadBalance();
  console.log(`賣蘋果之前,帳戶金額為: ${balance}`);
  const newBalance = balance + 120;
  await saveBalance(newBalance);
  console.log(`賣蘋果之後,帳戶金額為: ${newBalance}`);
}

async function main() {
  await Promise.all([sellGrapes(), sellApple()]);
  const balance = await loadBalance();
  console.log(`賣葡萄與蘋果之後的金額是: ${balance}`);
}

main();
