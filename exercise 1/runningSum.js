var runningSum = function(nums) {
  if (nums.length === 0) {
      // return []
      return nums
  }
  var output = [nums[0]]
  for (var i = 1; i < nums.length; i++) {
      output.push(nums[i] + output[output.length - 1])
  }
  return output
};

console.log(runningSum([1, 2, 6])) 