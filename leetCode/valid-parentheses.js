/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 */

const inputs01 = "()";
const inputs02 = "()[]{}";
const inputs03 = "(]";
const inputs04 = "([)]";
const inputs05 = ")(){}";
const inputs06 = "([]";

var isValid = function (s) {
  const parenthesis = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const expectingParentheses = [];
  let isPass = false;

  for (let p of [...s]) {
    const isFrontInclude = Object.keys(parenthesis).includes(p);
    const isBackInclude = Object.values(parenthesis).includes(p);
    if (!expectingParentheses && isBackInclude) return false;
    if (!isFrontInclude && !isBackInclude) continue;
    if (isFrontInclude) {
      expectingParentheses.push(parenthesis[p]);
      isPass = false;
    } else {
      const poped = expectingParentheses.pop();
      if (poped !== p) return false;
      isPass = true;
    }
  }
  if (expectingParentheses.length > 0) return false;
  return isPass;
};
console.log(isValid(inputs05));
console.log(isValid(inputs02));
console.log(isValid(inputs04));
