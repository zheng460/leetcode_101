MIN = 10**5 + 1
def try_left(nums: list[int], x: int):
    i = 0
    s = 0
    while(i < len(nums) and s + nums[i] <= x):
        s += nums[i]
        i += 1
    return i - 1, s

def try_right(nums: list[int], x: int, left: int, l_sum: int):
    i = len(nums) - 1
    s = l_sum
    while(i > left and s + nums[i] <= x):
        s += nums[i]
        i -= 1
    return i + 1, s

def replace_left_with_right(nums: list[int], x: int, current: int, left: int, right: int):
    min_ = MIN
    while(left >= 0):
        current -= nums[left]
        while (right - 1 > left):
            if current + nums[right - 1] == x:
                min_ = min(left + (len(nums) - (right - 1)), min_)
                right -= 1
                current += nums[right]
                break
            elif current + nums[right - 1] > x:
                break
            else:
                right -= 1
                current += nums[right]
        left -= 1

    return min_

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        l = len(nums)
        min_ = MIN
        left, l_sum = try_left(nums, x)
        if l_sum == x:
            min_ = left + 1
            min_ = min(replace_left_with_right(nums, x, x, left, l), min_)
        else:
            right, lr_sum = try_right(nums, x, left, l_sum)
            if lr_sum == x:
                min_ = left + 1 + (l - right)
                min_ = min(replace_left_with_right(nums, x, x, left, right), min_)
            else:
                min_ = replace_left_with_right(nums, x, lr_sum, left, right)
        
        return -1 if min_ == MIN else min_

        

        
