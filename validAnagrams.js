/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let check = new Array(26).fill(0);
    const alphabet = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25 }
    for (let i = 0; i < s.length; i++) {
        check[alphabet[s[i]]]++;
        check[alphabet[t[i]]]--;
    }
    for (let i = 0; i < check.length; i++) {
        if (check[i] !== 0) return false;
    }
    return true;

};