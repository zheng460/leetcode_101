class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        # [1, 10, 101, 102 ...., 2, 20, 200, 201, .., 29]
        # ith item in the list is num
        num = 1
        i = 1

        # loop 1:
        # n = 305, k = 120, num = 1, i = 1
        # num_to_next = 111 (1->2)
        # 111 + 1 <= k = 120 
        # i -> 111 + 1 = 112, num -> 2

        # loop 2:
        # 112 < k = 120
        # num_to_next = 111 (2->3)
        # 112 + 111 > 120
        # num -> 20, i -> 113

        # loop 3:
        # i = 113 < k = 120
        # num_to_next = 11 (20->21)
        # i + num_to_next = 113 + 11 > k
        # num -> 200, i -> 114

        # loop 4:
        # i = 114 < k = 120
        # num_to_next = 1 (200 -> 201)
        # i + num_to_next = 114 + 1 < 120
        # ...
        # num = 206

        while i < k:
            num_to_next = self.get_num_to_next(num, n)
            if i + num_to_next <= k:
                i += num_to_next
                num += 1
            else:
                num *= 10
                i += 1

        return num

    # find numbers in between root and root + 1
    def get_num_to_next(self, root, n):
        res = 0
        next_root = root + 1
        while root <= n:
            res += min(next_root, n + 1) - root
            root *= 10
            next_root *= 10
        
        # root = 3, n = 305

        # loop 1: 
        # next_root = 4
        # res += 1 -> res == 1
        # root == 30, next_root == 40

        # loop 2:
        # res += 40 - 30 -> res == 11
        # root == 300, next_root == 400
        
        # loop 3:
        # res += 305 + 1 - 300 = 6
        # res == 11 + 6 = 17

        return res
