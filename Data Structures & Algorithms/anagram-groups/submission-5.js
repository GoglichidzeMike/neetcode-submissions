class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for(let s of strs) {
            const count = new Array(26).fill(0);
            for(let c of s) {
                const val = c.charCodeAt() - 'a'.charCodeAt();
                count[val]++;
            }
            if(!res[count]) {
                res[count] = [];
            } 
            res[count].push(s);
        }
        console.log(res)
        return Object.values(res);

    }
}
