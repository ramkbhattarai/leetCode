/**
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

var threeSumClosest = function (num, target) {
    let result = num[0] + num[1] + num[num.length - 1];
    num = num.sort((a, b) => a - b);
    for (let i = 0; i < num.length - 2; i++) {
        let start = i + 1, end = num.length - 1;
        while (start < end) {
            let sum = num[i] + num[start] + num[end];
            if (sum > target) {
                end--;
            } else {
                start++;
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result;
};