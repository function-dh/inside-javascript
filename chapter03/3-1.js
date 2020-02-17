// 자바스크립트의 데이터 타입 7가지 (es6 symbol추가)
// 기본 타입과 참조 타입으로 나눠짐
// 자바스크립트는 느슨한 타입 체크언어 - 엄격한 타입 체크에는 c언어를 예를들어 데이터에 종류에 따라 변수의 데이터 타입을 지정해야함

var _number = 10
var _string = '문자'
var _boolean = true
var _undefined
var _null = null

console.log(typeof _number, typeof _string, typeof _boolean, typeof _undefined, typeof _null) // null이 object로 나오는 건 버그

// 모든 숫자는 실수로 처리함(정수x)
console.log(5/2) // 2.5

// 문자열은 index로 접근이 가능하고 한번 정의된 문자열은 변하지 않는다.
var string1 = 'test'
console.log(string1[0]) // t
string1[0] = 'R'
console.log(string1[0]) // 변하지 않기 때문에 t

// boolean - true, false

// null, undefined
// undefined는 할당되지 않은 값 - 기본 초기화 값
// null은 명시적으로 값이 비어있음을 나타내는 값