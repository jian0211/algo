/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const targetArr = [...(x + "")];
  for (let i = 0; i < targetArr.length / 2; i++) {
    if (targetArr.at(i) !== targetArr.at(-(i + 1))) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(10022201));
