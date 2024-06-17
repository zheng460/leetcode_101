class Solution {
    public int minSteps(String s, String t) {
        int n = s.length(), ans = 0;
        int[] arr = new int[26];
        for(int i = 0; i < n; i++) {
            arr[s.charAt(i) - 'a']++; // count the occurrences of chars in s.
            arr[t.charAt(i) - 'a']--; // compute the difference between s and t.
        }
        for(int i = 0; i < 26; i++) if(arr[i] > 0) ans += arr[i];
        return ans;
    }
}


// s = "aaa", t = "bbb" 
// arr[0] = 3, arr[1] = -3

// s = "bab", t = "bab" 
// arr[0] = 0, arr[1] = 0

/* different length */
// s = "aaa", t = "aaaa" 
// arr[0] = -1

// s = "aaa", t = "bbbbbb" 
// arr[0] = 3, arr[1] = -6
