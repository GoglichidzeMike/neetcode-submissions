class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        const count ={};

        for(let i =0; i<s.length; i++) {
            count[s[i]] = 1+ (count[s[i]] || 0)
            count[t[i]] = (count[t[i]] || 0 )-1
        }
        console.log(count)

        for(const key in count) {
            if(count[key] !== 0) {
                return false
            }
        }       

        return true;
    }
}
