/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */

var maxArea = function (height) {
    let prevArea = 0;// we assume at first area to be 0
    let left = 0; // starting index of array
    let right = height.length - 1;// last index of array
    while (left < right) { 
        let newArea = Math.min(height[left], height[right]) * (right - left);
        prevArea = Math.max(prevArea, newArea );
        if (height[left] < height[right]) { // if size of left is small move forward
            left++;
        } else { // if size of right is small move forward
            right--;
        }
    }
    return prevArea;
};