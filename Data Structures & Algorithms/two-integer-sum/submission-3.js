class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let myMap = new Map();
      for(let i =0; i<nums.length; i++) {
        const diff = target - nums[i];

        if(myMap.get(diff)) {
          return [myMap.get(diff).idx, i];
        }

        myMap.set(nums[i], {idx:i})
      }
    }
}
