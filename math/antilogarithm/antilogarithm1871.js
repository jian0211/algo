/**
 *  https://www.acmicpc.net/problem/1871
 * 
 * 문제
 * 앨버타의 자동차 번호판은 ABC-0123 (세 글자, 네 숫자)와 같이 두 부분으로 나누어져 있다.
 * 
 * 좋은 번호판은 첫 번째 부분의 가치와 두 번째 부분의 가치의 차이가 100을 넘지 않는 번호판이다.
 * 
 * 글자로 이루어진 첫 번째 부분의 가치는 글자를 26진법 수처럼 계산한다. (각 자리가 [A..Z]) 예를 들어, "ABC"의 가치는 28 (0×262 + 1×261 + 2×260)이 된다. "ABC-0123"은  |28 - 123| ≤ 100 이기 때문에, 좋은 번호판이다.
 * 
 * 자동차 번호판이 주어졌을 때, 좋은 번호판인지 아닌지를 구하는 프로그램을 작성하시오.
 * 
 * 입력
 * 첫째 줄에 번호판의 수 N (1 ≤ N ≤ 100)이 주어진다. 다음 N개 줄에는 자동차 번호판이 LLL-DDDD 형식으로 주어진다.
 * 
 * 출력
 * 각각의 자동차 번호판에 대해서, 좋은 번호판이면 "nice"를, 아니면 "not nice"를 출력한다.
 * 
 * 2
 * ABC-0123
 * AAA-9999
 * 
 */

// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const TEST_CASE = ["ABC-0123","AAA-9999"];

const solution = (array) => {
    const LIMIT = 100;
    for (let i = 0; i < array.length; i++) {
        const [firstTarget, secondTarget] = array[i].split("-");
        const _firstTarget = base26NumberOf(firstTarget);
        const _secondTarget = parseInt(secondTarget, 10);
        const result = Math.abs(_firstTarget - _secondTarget);
        console.log(result <= LIMIT ? "nice" : "not nice")
    };
};

// 26진법으로 계산하여 리턴.
const base26NumberOf = (target) => {
    const AL_PA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const BASE = AL_PA.length;
    const sumOfTarget = [...target].reduce((prev,curr, i, arr) => {
        return AL_PA.indexOf(curr) * BASE ** (arr.length - 1 - i) + prev
    },0);

    return sumOfTarget;
};

// solution(input.slice(1));
// solution(TEST_CASE);

console.log(["123","234","3456","4567"].slice(1))
