// XOR Operation in an Array
// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

var xorOperation = function(n, start) {
  let last = start + 2 * (n - 1) 
  if (start % 4 < 2) {
      start = 0
  } else {
      n -= 1
  }
  if (n % 2 == 0) return start ^ (n & 2);
  return start ^ last ^ (n & 2)
};