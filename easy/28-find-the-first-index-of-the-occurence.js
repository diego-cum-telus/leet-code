/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const needleChars = [...needle];
    const haystackChars = [...haystack];
    let i = 0;

    let index = -1

    while(i < haystackChars.length){
        if(haystackChars[i] === needleChars[0]){
            let find = true;
            needleChars.forEach((char, index)=>{
                
                if(char !== haystackChars[i+index]){
                    find = false;
                }
            })

            if(find){
                index = i;
                break;
            }else{
                i++;
            }
        }else{
            i++;
        }
    }



    return index
};

// Problems:
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.