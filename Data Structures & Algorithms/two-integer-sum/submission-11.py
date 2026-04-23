class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {} #value -> index

        for i in range(len(nums)):
            diff = target - nums[i]

            print(seen)

            if diff in seen:
                return [seen[diff], i]
            seen[nums[i]] = i

        return []