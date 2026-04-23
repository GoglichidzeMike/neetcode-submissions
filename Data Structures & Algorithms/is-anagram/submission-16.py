class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        seen = {}

        for i in range(len(s)):
            if s[i] in seen:
                seen[s[i]] += 1
            else:
                seen[s[i]] = 1

            if t[i] in seen:
                seen[t[i]] -= 1
            else: 
                seen[t[i]] = -1

        
        for _, val in seen.items():
            if val != 0:
                return False

        return True

        



        