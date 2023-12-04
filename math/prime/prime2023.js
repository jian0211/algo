/**
 * https://www.acmicpc.net/problem/2023
 * 
 * 문제: 수빈이가 세상에서 가장 좋아하는 것은 소수이고, 취미는 소수를 가지고 노는 것이다. 요즘 수빈이가 가장 관심있어 하는 소수는 7331이다.
 * 7331은 소수인데, 신기하게도 733도 소수이고, 73도 소수이고, 7도 소수이다. 즉, 왼쪽부터 1자리, 2자리, 3자리, 4자리 수 모두 소수이다! 
 * 수빈이는 이런 숫자를 신기한 소수라고 이름 붙였다.
 * 수빈이는 N자리의 숫자 중에서 어떤 수들이 신기한 소수인지 궁금해졌다. N이 주어졌을 때, 수빈이를 위해 N자리 신기한 소수를 모두 찾아보자.
 * 
 * 입력: 첫째 줄에 N(1 ≤ N ≤ 8)이 주어진다.
 * 
 * 출력: N자리 수 중에서 신기한 소수를 오름차순으로 정렬해서 한 줄에 하나씩 출력한다.
 * 
 */

// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// 소수인지 체크하는 함수
const isPrime = (target) => {
    if(target === 1) return false;
    for (let i = 2; i * i <= target; i++) {
        if(target % i === 0) return false;
    };
    return true;
};

// 소수의 값이 포함되어있는지 체크하는 함수
const isIncludeInPrimes = (target) => [2,3,5,7].includes(target);

// 재귀적으로 신기한 소수인지 체크하는 함수
const primeRecursion = (target) => {
    if(target === 0) return true;
    return !isPrime(target) ? false : primeRecursion(Math.floor(target / 10)); 
};

const prime2023 = (n) => {
    const lastNum = Number("9".repeat(n)); 
    const startNum = (lastNum + 1) / 10;
    let targetNum = startNum; 

    while(targetNum <= lastNum){
        const firstNum = Math.floor(targetNum / startNum );
        if(isIncludeInPrimes(firstNum)){
            if(primeRecursion(targetNum)){
                console.log(targetNum);
            };
        }; 

        targetNum++; 
    };
};

prime2023(1); // 2, 3, 5, 7
