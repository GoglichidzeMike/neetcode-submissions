class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {};
        for(let i =0; i<nums.length; i++) {
            hash[nums[i]] = (hash[nums[i]] || 0) +1;
        }

        const arr = Object.entries(hash).map((i) => [
            i[1],
            i[0]
        ])
        arr.sort((a,b) => b[0] - a[0]);

        return arr.slice(0,k).map((pair) => pair[1])
    }
}
