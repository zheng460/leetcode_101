/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * As discussed on Jun 5, 2024 at GunBei Seattle, WA, this problem can be found at: 
 * https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/, 
 * 
 * @author: yuanfengli
 * @date: 06052024
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
var countSubarrays = function(nums, k) {
    // edge case: 
    if (!nums || k < 0) {
        return 0;
    }

    // using two pointers: 
    let l = 0;
    let r = 0;
    let curK = 0;
    let result = 0; 
    let max = Math.max(...nums);

    for (r = 0; r < nums.length; r++) {
        if (nums[r] === max) {
            curK++;
        }

        while (curK == k) {
            if (nums[l] === max) {
                curK--;
            }
            l++
        }

        result += l;
    }

    return result;
};