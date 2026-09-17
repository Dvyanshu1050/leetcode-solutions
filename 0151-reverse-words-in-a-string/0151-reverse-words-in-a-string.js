/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};


console.log(reverseWords("the sky is blue"));
// Output: "blue is sky the"

console.log(reverseWords("  hello world  "));
// Output: "world hello"

console.log(reverseWords("a good   example"));
// Output: "example good a"