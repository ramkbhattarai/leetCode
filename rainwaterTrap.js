/**
 * Given n non-negative integers representing an elevation map 
 * where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 * 
 * Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

function rainTrap(height) {
    let size = height.length;
    if (size <= 1) return 0;
    let ans = 0;
    let lMax = []; // we store Right and Left max height for each i of height 
    let rMax = [];
    lMax[0] = height[0]; // initialize with left value
    rMax[size-1] = height[size-1]; // initialize with right value
    for(let i = 1; i < size; i++){ // fill the value 
        lMax[i] = Math.max(height[i], lMax[i-1]);
    }
    for(let i  =size -2; i>=0; i--){
        rMax[i] = Math.max(height[i], rMax[i+1]);
    }

    for (let i = 1; i < size; i++) { // water store is min between lmax and right max
        // subtracted by its own height
        ans += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return ans;
}


// this is optimization of previous answer.
//  function rainTrap(height){
//      let size = height.length;
//      if(size <=1) return 0;
//      //let ans = 0;
//      let end = size -1;
//      let lMax = rMax = ans = start = 0;
//      while(start < end){
//          if(height[start] < height[end]){
//                 if(height[start] >= lMax){
//                     lMax = height[start];
                    
//                 }else{
//                     ans +=  lMax - height[start];
//                 }
//              start++;
//          }else{
//              if (height[end] >= rMax) {
//                  rMax = height[end];
                 
//              } else {
//                  ans += rMax - height[end];
//              }
//              end--;
//          }
//      }
//      return ans;
//  }

console.log(rainTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))