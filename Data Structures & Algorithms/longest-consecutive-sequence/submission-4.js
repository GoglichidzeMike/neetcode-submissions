class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const arr = new Set(nums);
        let length = 0;

        for(let i =0; i<nums.length; i++) {
            if(!arr.has(nums[i] - 1)) {
                let count = 1;
                while(arr.has(nums[i] + count)) {
                    count++;
                    console.log('in while')
                }
                length = Math.max(length, count)
            }
        }

        return length;
    }
}
