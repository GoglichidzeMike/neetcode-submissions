class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freq = {}

        for(let i in s) {
            freq[s[i]] = (freq[s[i]] || 0) +1;
            freq[t[i]] = (freq[t[i]] || 0) -1;
        }


        for(let f in freq) {
            if(freq[f] !== 0) return false
        }

        return true
        
    }
}
