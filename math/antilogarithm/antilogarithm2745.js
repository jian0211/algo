/**
 * https://www.acmicpc.net/problem/2745
 * 
 * B진법 수 N이 주어진다. 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
 * 10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.
 * A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35
 * 
 * 입력
 * 첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36)
 * B진법 수 N을 10진법으로 바꾸면, 항상 10억보다 작거나 같다.
 * 
 * 출력
 * 첫째 줄에 B진법 수 N을 10진법으로 출력한다.
 * 
 * ZZZZZ 36 => 60,466,175
 * 
 */

// const fs = require('fs');
// const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const inputs = ["ZZZZZ","36"];

const ZERO_TO_Z = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const solution = (n, b) => {
    let result = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        const target = ZERO_TO_Z.indexOf(n[i]) * Number(b) ** i;
        result += target;
    }
    return result;
};

console.log(solution(inputs[0], inputs[1]))


 