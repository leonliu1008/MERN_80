const fib = (n) => {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  let fib_sequence = [0, 1];
  while (fib_sequence.length <= n) {
    // 最後一個值 fib_sequence.length -1
    // 倒數第二個 fib_sequence.length -2
    let last_elem = fib_sequence[fib_sequence.length - 1];
    let second_last_elem = fib_sequence[fib_sequence.length - 2];

    fib_sequence.push(last_elem + second_last_elem);
  }
  console.log(fib_sequence);
};
fib(0); // returns 0
fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
// fib(8); // returns 21
