/**
 * Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
 */

var reverseStr = function (s, k) {
    let arr = s.split(""); // changing into array
    let size = arr.length; // get the length of that array
    // what we want to do is only reverse the content of the arr where we need
    // so i += 2 * k will take us right at that position
    for (let i = 0; i < size; i += 2 * k) { // iterate over the array but 
        let start = i; // starting index that we should start from reversing
        let end = Math.min(i + k - 1, size - 1); // ending index of reversing
        while (start < end) {
            let temp = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp
        }
    }
    return arr.join("")
};