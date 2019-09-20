/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */


var majorityElement = function (nums) {
    // this is tricky one.
    // we set up the count and loop through nums arr;
    // at first we set our ans to the first num of 
    let count = 0;
    let ans;
    nums.forEach(num => {
        if (count === 0) {
            ans = num;
        }
        count += (num === ans) ? 1 : -1;
    })
    return ans;
};