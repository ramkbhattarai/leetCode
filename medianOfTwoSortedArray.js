/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let comb = [];
    let k = 0;
    while (k < (nums1.length + nums2.length)) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                comb[k] = nums1[i];
                i++;
            } else {
                comb[k] = nums2[j];
                j++;
            }
        } else if (i < nums1.length) {
            comb[k] = nums1[i];
            i++;
        } else {
            comb[k] = nums2[j];
            j++;
        }
        k++;
        //console.log(comb);
    }


    let midIdx = Math.floor(comb.length / 2);
    let len = comb.length;
    if (len % 2 === 0) {
        return (comb[midIdx] + comb[midIdx - 1]) / 2;
    } else {
        return comb[midIdx];
    }
}