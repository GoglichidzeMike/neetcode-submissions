class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let start =0;
        let end = s.length-1;

        const isPali = (s) => {
            let left =0;
            let right = s.length -1;
            while(left<right) {
                if(s[left] !== s[right]) {
                    return false
                }
                left++
                right--
            }
            return true
        }

        while(start<end) {
            if(s[start]  !== s[end]) {
                const vOne = s.slice(start,end);
                const vTwo = s.slice(start+1, end+1);
                console.log(vOne, vTwo)
                if(!isPali(vOne) && !isPali(vTwo)) {
                    return false
                }
            }
            start++
            end--
        }
        return true
    }
}
