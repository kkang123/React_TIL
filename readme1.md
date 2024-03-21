# package.json

- "type": "module" 은 ES모듈 시스템을 사용하겠다는 뜻

## CJS

```js
// 모듈 호출
// 내장 함수
// const moduleData = require("./math");

// 객체의 구조분해 할당
const { add, sub } = require("./math");

// console.log(moduleData.add(2, 5));
// console.log(moduleData.sub(9, 5));
console.log(add(2, 5));
console.log(sub(9, 5));

console.log("안녕 Node.js");
// console.log(moduleData);
```

```js
// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CJS
// 모듈이라는 내장 객체에 exports 프로퍼티 값으로 객체 저장
module.exports = {
  add: add,
  sub,
};

// ESM은 최신 모듈 시스템 React에서 사용된다.
```

## ES 모듈

```js
// import { add, sub } from "./math.js";
// import mul from "./math.js";
import mul, { add, sub } from "./math.js";

console.log(add(2, 5));
console.log(sub(9, 5));
console.log(mul(2, 6));

console.log("안녕 Node.js");
```

```js
// math 모듈

function add(a, b) {
  return a + b;
}

// function sub(a, b) {
//   return a - b;
// }
export function sub(a, b) {
  return a - b;
}

// export {add, sub};
export { add };

export default function multiply(a, b) {
  return a * b;
}
```
