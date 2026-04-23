class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hi =0;
        let lo = prices[0];

        for(let i =0; i<prices.length; i++) {
            hi = Math.max(hi, prices[i]-lo);
            lo = Math.min(lo, prices[i]);

        }

        console.log(prices[hi] - prices[lo])
        console.log(lo, hi)

        return hi
    }
}
