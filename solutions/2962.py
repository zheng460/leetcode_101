def get_indexes(nums: list, val: int):
    res = []
    i = 0
    for num in nums:
        if num == val:
            res.append(i)
        i += 1
    return res

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_ = max(nums)
        print(len(nums))
        indexes = get_indexes(nums, max_)
        print(indexes)
        i_len = len(indexes)
        if i_len < k:
            return 0
        else:
            i = 0
            cnt = 0
            before_block = indexes[0] + 1
            after_block = len(nums) - indexes[i + k -1]
            cnt += before_block * after_block
            i += 1
        
            while(i + k <= i_len):
                # before first occ + before current block + 1 + after current block
                # print(before, len(nums) -1 - indexes[i + k -1])
                # print(i)
                # print(cnt, before, indexes[i] - indexes[i - 1] - 1, len(nums) -1 - indexes[i + k -1])
                before_block = indexes[i] - indexes[i - 1]
                after_block = len(nums) - indexes[i + k -1]
                cnt += before_block * after_block
                i += 1
            return cnt
