class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freq = {};
        for(let i =0; i<s.length; i++) {
            console.log(s[i])
            freq[s[i]] = (freq[s[i]] || 0 ) + 1;
            freq[t[i]] = (freq[t[i]] || 0) - 1;
        }

        for(let char in freq) {
            if(freq[char] !== 0) return false
        }
        return true
    }
}
