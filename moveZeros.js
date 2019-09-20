/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

var moveZeroes = function (nums) {
    // count the number of zeros 
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // keep the non zero elements in the front of the array with the help of count
        // at last you will have the count of nums that are not zero and later we 
        // can begin from that count and add zeros till the length of the array.
        if (nums[i] !== 0) nums[count++] = nums[i];
    }

    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};