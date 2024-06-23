/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}


Method1: brute force find all the subarray possibilities and then compare all the sums.
using DFS, Time complexity: O(3 ^ n); space complexity: O(n);(Not good, too time consuming)

Method2: using dynamic programming. 
- blocker: how to make only one variable? while we can go left k times, as well as go right k times? 
           To solve this, we can create a dp array, and let i's value be it's largest sum so far. 
- Solution: 
  using i pointer to go from 0 to arr.length - 1;
  using j pointer to go from i to the k steps ahead/0. (i - k + 1);

  while in [i, j]; we always find the max number in the current subarray, and calculate the sum total, and update dp[i]

  As a summary, the array dp, is going to record the current largest sum of [0, i]; i is the current index on dp,
  0 and i are both included. 

  [1, 15, 10] 
i === 0:
   i 
   j
dp[1,  0,  0]

i === 1:
       i
       j
    j
dp [1, 30, 0]

i === 2:
           i
           j
        j
    j
dp [1, 30, 45]

return last element in dp arr, will get your answer!.
 */
var maxSumAfterPartitioning = function(arr, k) {
    // clarify: do we consider edge case: 
    if (!arr || arr.length === 0 || k < 0) {
        return 0; // need to clarify with interviewer.
    }

    // other case: 
    const len = arr.length;
    const dp = new Array(len).fill(0); 
    for (let i = 0; i < arr.length; i++) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let j = i; j >= Math.max(i - k + 1, 0); j--) {
            max = Math.max(max, arr[j]);
            const count = i - j + 1;
            if (j - 1 < 0) {
                dp[i] = Math.max(dp[i], count * max + 0);
            } else {
                dp[i] = Math.max(dp[i], count * max + dp[j - 1]);
            }
        }
    }
    return dp[len - 1];
};