/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let prev = nums[i-1];
    let res = 0;


    while(i < nums.length){
        
        if(nums[i] === target){
            res = i;
            break;
        }


        if(prev < target){
            if(nums[i] > target){
                res = i;
                break;
            }   
            if(i === nums.length - 1){
                res = i +1;
                break
            }
        }else{
            if(target < nums[i]){
                res = 0;
                break
            }else if(i === nums.length - 1){
                res = i +1;
                break
            }else{
                prev = nums[i];
            }
        }
         
        i++;
    }

    return res
    
};

// Problem: 
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104