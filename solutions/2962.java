 /**
  * 333's solution.
  */
 
 class Solution {
    public long countSubarrays(int[] nums, int k) {
        // find max
        long max = nums[0];
        for (int num : nums) {
            if (num > max) {
                max = num;
            }
        }

        // count subarray
        int maxCount = nums[0] == max ? 1 : 0;
        long res = 0;
        int i = 0;
        int j = 0;
        while (true) {
            if (maxCount < k) {
                j++;
                if (j == nums.length) {
                    break;
                }
                if (nums[j] == max) {
                    maxCount++;
                }
            }
            if (maxCount == k) {
                if (nums[i] == max) {
                    maxCount--;
                }
                i++;
                res += nums.length - j;
            }
        }

        return res;
    }
}