/**
 * p28
 */

function maxGap(nums) {
  if (nums == null || nums.length < 2) {
    return 0;
  }
  let len = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  if (min == max) {
    return 0;
  }
  let hasNum = new Array(len + 1).fill(false);
  let maxs = new Array(len + 1).fill(0);
  let mins = new Array(len + 1).fill(0);
  let bid = 0;
  for (let i = 0; i < len; i++) {
    bid = bucket(nums[i], len, min, max);
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], nums[i]) : nums[i];
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], nums[i]) : nums[i];
    hasNum[bid] = true;
  }
  let res = 0;
  let lastMax = maxs[0];
  let i = 1;
  for (; i <= len; i++) {
    if (hasNum[i]) {
      res = Math.max(res, mins[i] - lastMax);
      lastMax = maxs[i];
    }
  }
  return res;
}

function bucket(num, len, min, max) {
  return Math.floor((num - min) * len / (max - min));
}

console.log(maxGap([2, 6, 9, 4, 1, 11]));