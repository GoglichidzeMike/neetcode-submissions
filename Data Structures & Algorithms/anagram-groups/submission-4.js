class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // hash will be 'letters' : [] array
    /**
     *  hash = {
     *  "act": ["act"],
     * "pots": ["pots", "tops", "stop"],
     * "hat": ["hat"]
     * }
     * 
     * 
     */
    groupAnagrams(strs) {
        const res = {}
        for(let i=0; i<strs.length; i++) {
            const count = new Array(26).fill(0);
            for(let c of strs[i]) {
                count[c.charCodeAt()- 'a'.charCodeAt()] += 1
            }
            const key = count.join(',');

            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(strs[i]);
        }
        console.log(res);
        return Object.values(res)
    }
}
