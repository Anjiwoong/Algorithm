var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let left = nums[0];
  let right = nums[nums.length - 1];
  let firstIndex = 0;
  let lastIndex = 1;
  let arr = [];
  let result = [];

  for (i = 0; i < nums.length - 2; i++) {
    left = nums[firstIndex];
    right = nums[nums.length - lastIndex];

    console.log('left', left);
    console.log('second', nums[firstIndex + 1]);
    console.log('right', right);
    console.log('---------------------------');

    if (left + right + nums[firstIndex + 1] < 0) {
      firstIndex += 1;
    } else if (left + right + nums[firstIndex + 1] > 0) {
      lastIndex += 1;
    } else if (left + right + nums[firstIndex + 1] === 0) {
      arr = [left, nums[firstIndex + 1], right];
      result.push(arr);
      if (left === nums[firstIndex + 1]) {
        firstIndex += 1;
        continue;
      }
      if (right === nums[nums.length - (lastIndex + 1)]) {
        lastIndex += 1;
        continue;
      }
      lastIndex += 1;
      firstIndex += 1;
    }
  }
  console.log(result);
};

threeSum([-1, 0, 1, 2, -1, -4]);
