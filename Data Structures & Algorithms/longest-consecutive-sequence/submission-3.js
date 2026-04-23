class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const arr = new Set(nums);
        console.log(arr)
        let length = 0;
        for(let i =0; i<nums.length; i++) {
            if(!arr.has(nums[i] - 1)) {
                let k = 1;
                let count = 1;
                while(arr.has(nums[i] + k)) {
                    count++;
                    k++
                    console.log('in while')
                }
                length = Math.max(length, count)
            }
        }

        return length;
    }
}
