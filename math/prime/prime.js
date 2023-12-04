
/** 
 * 소수인지 판정하는 함수
 * 주어진 타겟 값이 1인 경우, 소수가 아니다. 
 * 시간복잡도는 O(루트N) 
*/
const isPrime = (target) => {
    if(target === 1) return false;
    for (let i = 2; i * i <= target; i++) {
        if(target % i === 0) return false;
    };
    return true;
};

module.exports = isPrime;