<!-- sum of 1d array -->

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


<!-- Input: nums = [1,2,3,4] -->
<!-- Output: [1,3,6,10] -->
<!-- Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. -->