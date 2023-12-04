var isPrime = require('./prime');

/**
 * 문제 : https://www.acmicpc.net/problem/1929
 * 
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 * 
 * 입력 : 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
 * 
 * 출력 : 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
 */

// const fs = require('fs');
// const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const inputs = [3, 16];

const prime1929 = (m, n) => {
    let target = m;
    while(target <= n){
        if(isPrime(target)){
            console.log(target);
        };
        target++;
    }
}

prime1929(inputs[0],inputs[1]); // 3, 5, 7, 11, 13;