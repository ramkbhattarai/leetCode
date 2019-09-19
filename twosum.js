/**Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */


// this is brute force method 
// It uses two for loops to check every indices and check whether the sum is equal to target.
// time = O(n2)
// space = O(1)


// function twoSum(arr, target){
//     let ans = [];
//     for(let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++) {
//             if(j > i){
//                 if(arr[i] + arr[j] === target){
//                     ans.push(i, j);
//                 }
//             }
//         }
//     }
//     return ans;
// }


// this method solves in O(n) time as we use hash object to save the 
// numbers of array as key and their indexes as values.
// while we loop through the array we check if the remaining sum is in the 
// hash if yes we got our ans and if not we make numbers as keys and index as values in hash.
function twoSum(arr, target) {
   let hashLikeObject = {};
   for(let i = 0; i < arr.length; i++){
       let remainingSum = target - arr[i];
       if (remainingSum in hashLikeObject){
           return [hashLikeObject[remainingSum], i];
       }else{
           hashLikeObject[arr[i]] = i;
       }

   }
}
