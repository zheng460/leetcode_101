// 1. 确定dp的维度(1维, 2维, 3维, ...)
// 2. 确定dp[i]的推导公式(从只有1个element的情况开始考虑)

class Solution {
    public int maxSubArray(int[] nums) {
        int l = nums.length;
        int[] dp = new int[l];
        dp[0] = nums[0];
        int max = nums[0];
        // dp[i] = dp[i-1] + nums[i]? nums[i]

        for (int i = 1; i < l; i++) {
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            max = Math.max(max, dp[i]);
        }

        return max;
    }
}
