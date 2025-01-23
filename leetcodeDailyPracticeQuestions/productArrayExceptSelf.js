/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let prev = 1;
    let temp = new Array(n);
    
    for (let i = 0; i < n; i++) {
        temp[i] = prev;
        prev *= nums[i];
    }
    
    prev = 1;
    for (let i = n - 1; i >= 0; i--) {
        temp[i] *= prev;
        prev *= nums[i];
    }
    
    return temp;
};
