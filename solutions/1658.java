class Solution {
    public int minOperations(int[] nums, int x) {
        int n = nums.length;
        // find max window sum needed
        int targetSum = 0;
        for (int num : nums) { 
            targetSum += num;
        }
        targetSum = targetSum - x;

        if (targetSum == 0) {
            return n;
        }

        int sum = nums[0];
        int maxLength = 0;
        int j = 0;
        for (int i = 0 ; i < n ; i++) {
            while (sum < targetSum && j < n - 1) {
                j++;
                sum += nums[j];
            }
            if (sum == targetSum) {
                maxLength = Math.max(j - i + 1, maxLength);
            }
            sum -= nums[i];
        }

        return maxLength == 0 ? -1 : n - maxLength;
    }
}