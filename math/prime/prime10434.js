/**
 * https://www.acmicpc.net/problem/10434
 *  
 * 7은 분명 소수이다. 과연 행복할까?
 *  7 → 72 = 49
 *  49 → 42 + 92 = 97
 *  97 → 92 + 72 = 130
 *  130 → 12 + 32 + 02 = 10
 *  10 → 12 + 02 = 1
 * 7은 행복한 수이다 ☺.
 * 
 * 입력: 각 테스트 케이스는 테스트 케이스 번호와 행복한 소수인지 판정해야 할 정수인 M으로 이루어져 있다. (1 ≤ m ≤ 10000).
 * 
 * 출력: 각 테스트 케이스마다, 테스트 케이스의 번호, 입력받은 수, 만일 M이 행복한 소수라면 YES 아니라면 NO를 공백으로 각각 구분하여 출력한다.
 * 
 */


/**
   4       // 테스트 케이스 수 P
   1 1     // 케이스 번호 행복한 수소 대상 수 
   2 7
   3 383
   4 1000
 */
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const primesCaseCount = input.shift();
// const caseGroups = input.map((caseGroup) => caseGroup.split(" "));
const primesArr = [[1,1],[2,7],[3,383],[4,1000]];

// 소수 판정함수.
const isPrime = (target) => {
    if(target === 1) return false;
    for (let i = 2; i * i <= target; i++) {
        if(target % i === 0 ) return false;        
    };
    return true;
};

const isHappyPrime = (target, primes = []) => {
    if( target === 1 ) return true; 
    if(primes.includes(target)) return false;
    primes.push(target);
    const targetToStringArr = [...target+""]; 
    const sumOfSquares = targetToStringArr.reduce((p,c) => p + c * c, 0);
    return isHappyPrime(sumOfSquares, primes);
};


const prime10434 = (target) => {
    if(target === 1 || !isPrime(target)) return "NO";
    return isHappyPrime(target) ? "YES" : "NO";
};


primesArr.forEach((caseGroup) => {
    console.log(`${caseGroup[0]} ${caseGroup[1]} ${prime10434(+caseGroup[1])}`);
});