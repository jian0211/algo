/**
 * https://www.acmicpc.net/problem/2998
 * 
 * 창영이는 여러 가지 진법을 공부하고 있다. 창영이는 어제 2진법을 배웠고, 오늘은 8진법을 배웠다. 
 * 이제, 2진법 수를 8진법 수로 변환하려고 한다.
 * 창영이가 사용한 방법은 다음과 같다.
 *  
 *  2진수의 길이가 3으로 나누어 떨어질 때 까지 수의 앞에 0을 붙인다.
 *  그 다음, 3자리씩 그룹을 나눈다.
 *  아래의 표를 참고해 8진수로 바꾼다.
 *  2진수가 주어졌을 때, 창영이가 사용한 방법을 이용해 8진수로 바꾸는 프로그램을 작성하시오.
 */

// const input = require('fs').readFileSync('/dev/stdin').toString();

// 주어진 타겟의 길이가 3의 배수가 아닌 경우, 나머지만큼 맨 앞자리에 0을 채워준다.
const addZeroIfNotMultipleOfThree = (target) => {
    return target.length % 3  === 0 
        ? target
        : "0".repeat(3 - (target.length % 3)) + target;
};

const solution = (target) => {
    const OCTAL = {
        "000" : "0",
        "001" : "1",
        "010" : "2",
        "011" : "3",
        "100" : "4",
        "101" : "5",
        "110" : "6",
        "111" : "7"
    };

    const _target = addZeroIfNotMultipleOfThree(target);
    return _target.match(/.{1,3}/g).reduceRight((prev, curr) => OCTAL[curr] + prev, ""); 
};

// console.log(solution("1010"));
// console.log(solution("11001100"));
// console.log(solution(input));

