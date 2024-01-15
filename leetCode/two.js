//leetcode.com/problems/two-sum/submissions/1146411117/?source=submission-ac

var twoSum = function (nums, target) {
  const numsToObj = {};
  let complement;
  for (let i = 0; i < nums.length - 1; i++) {
    complement = target - nums[i];
    if (complement in numsToObj) {
      return [numsToObj[complement], i];
    }

    numsToObj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
