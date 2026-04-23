class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array((nums.length-1)*2).fill(null);

        for(let i = 0; i<nums.length; i++) {
            ans[i] = nums[i]
            ans[i+nums.length] = nums[i]
        }

        return ans
    }
}
