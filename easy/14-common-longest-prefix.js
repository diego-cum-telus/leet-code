/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let counter = 0;
    while(true){
        let test = prefix + strs[0][counter];
        const cnd = strs.every((word) => {
           const testSub = word.substring(0, counter + 1)
           return testSub === test
        })
        
        if(cnd){
            prefix += strs[0][counter]
            counter++;
        } 

        if(!cnd){
            break;
        }
    }
    


    return prefix
};


// Proble:
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.