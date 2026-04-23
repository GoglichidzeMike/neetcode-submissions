class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hash = {};
        for(let i=0; i<nums.length; i++) {
            hash[nums[i]] = (hash[nums[i]] || 0) +1;
            if(hash[nums[i]] > nums.length /2){
                return nums[i]
            }
        }
    }
}
