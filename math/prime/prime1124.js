/**
 * https://www.acmicpc.net/problem/1124
 * 
 * 문제
 *  자연수 X를 소인수분해하면, 곱해서 X가 되는 소수의 목록을 얻을 수 있다. 
 *  예를 들어, 12 = 2 × 2 × 3이다. 1은 소수가 아니다.
 *  어떤 수 X를 소인수분해 해서 구한 소수의 목록의 길이가 소수이면, 그 수를 언더프라임 이라고 한다. 
 *  12는 목록에 포함된 소수의 개수가 3개이고, 3은 소수이니 12는 언더프라임이다.
 *  두 정수 A와 B가 주어졌을 때, A보다 크거나 같고, B보다 작거나 같은 정수 중에서 언더프라임인 것의 개수를 구해보자.
 * 
 * 입력 : 첫째 줄에 두 정수 A와 B가 주어진다.
 * 
 * 출력 : 첫째 줄에 A보다 크거나 같고, B보다 작거나 같은 언더프라임 개수를 출력한다.
 * 
 */

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' '); 
// const inputs = [2, 10];  

const solution = (startNum, lastNum) => {
    let result = 0;
    while(startNum <= lastNum){
        const _primeFactors = primeFactors(startNum);
        if(isPrime(_primeFactors.length)){
            const hasPrimeInPrimeFactors = [...new Set(_primeFactors)].find(prime => isPrime(prime));
            if(hasPrimeInPrimeFactors) result ++;
        }
        startNum++;
    }
    return result;
};

const isPrime = (target) => {
    if(target === 1) return false;
    for (let i = 2; i * i <= target; i++) {
        if(target % i === 0 ) return false;        
    };
    return true;
}

const primeFactors = (target, dividNum = 2, primeFactorArr = []) => {
    if(target === 1) return primeFactorArr;
    const dividedTarget = target / dividNum;  
    if(Number.isInteger(dividedTarget)){
        return primeFactors(dividedTarget, 2, [...primeFactorArr, dividNum])
    };
    return primeFactors(target, dividNum + 1, primeFactorArr);
};

// console.log(solution(2,10));
// console.log(solution(100,105));
// console.log(solution(17,17));
// console.log(solution(123,456));
solution(inputs[0],inputs[1]);

