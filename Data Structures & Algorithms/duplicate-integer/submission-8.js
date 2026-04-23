class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {}
        for (let num of nums) {
            seen[num] = (seen[num] || 0) +1;
            if(seen[num] >1) {
                return true
            }
        }
        return false
    }
}
