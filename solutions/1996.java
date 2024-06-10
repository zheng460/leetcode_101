/*
特殊点在于：我们要同时比较两个value，attack and defense
brute force: O(N * N)

----->

为了缩短比较大小的complexity,有两个idea使我想到sort：
1. sort可以使我们在traverse时只需要对比一个value
2. sort可以使我们用binary search ×

----->

决定使用sort后，我们应该根据什么value来sort呢？
取决于我们的implementation

我们选择先根据第一个value attack来排序，保证我们traverse时只需要对比第二个value defense
当第一个value相等时，我们根据第二个value【由大到小】排列

注意！！！第二个vlaue一定要descending order！！！！！
为了防止，不取第一个value相等的情况，但第二个value weak的情况！(a, b)

input: [[1,1],[2,1],[2,2],[1,2]]

asc:
1,1
1,2
2,1 -> weak ×
2,2 -> max

desc:
1,2
1,1
2,2
2,1 -> max


Arrays.sort(array, (a, b) -> {
    if (a[0] != b[0]) {
        return Integer.compare(a[0], b[0]);
    } else {
        return Integer.compare(b[1], a[1]);
    }
});

----->

当我们得到了sorted array后，我们只需要比较second value。
现在，取element的second value为暂时的最大值，所以我们取int max = properties[len-1][1]，然后一个个往前比较即可得到output。

----------
ATTENTION!
这个方法直接modify了input array，由于本题修改了input不会让人踩坑且不被禁止。可能会有题目明确禁止modify input，需要注意！

时间复杂度：
sort(): O(99999999999 * N * logN) = O(N) + O(N * logN) = O(N * logN)

*/
class Solution {
    public int numberOfWeakCharacters(int[][] properties) {
        
        // Sort the array based on the first value (attack) in each character in ascending order.
        // If the first value is the same, compare the second value in descending order.
        Arrays.sort(properties, (a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            } else {
                return Integer.compare(b[1], a[1]);
            }
        });
        
        int numOfWeakCharacters = 0;
        int len = properties.length;

        int max = properties[len-1][1];
        
        for (int i = len - 2; i >= 0 ; i--) {
            
            if (properties[i][1] < max) {  // gurantee that a[0] is also < b[0]
                numOfWeakCharacters++;
            } else {
                max = properties[i][1];
            }
        }
        return numOfWeakCharacters;
    }
}
