function answer(s, e) {
  const result = new Array(10).fill(0);

  let num;
  for (let i = s; i <= e; i++) {
    num = i;

    while (num !== 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  return result;
}

let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
