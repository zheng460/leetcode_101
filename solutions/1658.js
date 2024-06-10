/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 * 
 * gy Jacky Li: 
 * Time complexity: O(n);
 * Space complexity: O(1);
 */

 // DFs
 // a sliding window to find the longest subarray length in which the sum === total - x;
 var minOperations = function(nums, x) {
    // // base or edge case: 
    let left = 0;
    let curSum = 0;
    let longest = Number.NEGATIVE_INFINITY;
    let total = nums.reduce((partialSum, a) => partialSum + a, 0);
    if (total - x < 0) {
        return -1;
    }

    for (let right = 0; right < nums.length; right++) {
        curSum += nums[right];
        
        while (curSum > total - x) {
            // move the left pointer until it is == or smaller
            curSum -= nums[left];
            left++;
        }

        // if the curSum is equal:
        if (curSum === total - x) {
            longest = Math.max(longest, right - left + 1);
        }
    }
    return longest === Number.NEGATIVE_INFINITY ? -1 : nums.length - longest;
};
