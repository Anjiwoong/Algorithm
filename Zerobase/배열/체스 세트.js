function answer(chess) {
  let result = [];
  const chessNum = [1, 1, 2, 2, 2, 8];

  chess.map((num, i) => result.push(chessNum[i] - num));

  return result;
}

let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
