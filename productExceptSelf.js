/**
 * Given an array nums of n integers where n > 1, 
 *  return an array output such that 
 * output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? 
(The output array does not count as extra space for the purpose of space complexity analysis.)
 */

var productExceptSelf = function (nums) {
    if (!nums.length) return 0;
    let ans = [];
    // first calculate the left product of all element from given index
    // for 1st element there will not be any element to its left so we can safely
    // asume that ans[0] = 1
    ans[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }

    // then calculate all the right products of the element;
    // for last element there won't be any element to its right so
    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= r;
        r *= nums[i]
    }
    return ans;
};