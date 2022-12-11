function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) result[i] = [];

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;

  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;

    if (length <= 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }

  // return result;
}

let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// [0, 0][(0, 1)][(0, 2)][(0, 3)][(0, 4)][(1, 0)][(1, 1)][(1, 2)][(1, 3)][(1, 4)][
//   (2, 0)
// ][(2, 1)][(2, 2)][(2, 3)][(2, 4)][(3, 0)][(3, 1)][(3, 2)][(3, 3)][(3, 4)][
//   (4, 0)
// ][(4, 1)][(4, 2)][(4, 3)][(4, 4)];
