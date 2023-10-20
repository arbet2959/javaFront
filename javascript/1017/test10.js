// 숫자함수 연습
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = 31.4;

let num = 0;

num = Math.max(su1,su2,su3,su4,su5);
num = Math.min(su1,su2,su3,su4,su5);
num = Math.ceil(su4); //올림
num = Math.floor(su3); //내림
num = Math.trunc(su4); //소수점이하 없애기

num = Math.pow(2,5); //2^5
num = Math.abs(su2);
num = Math.sqrt(16);

num = su3.toFixed(1); // 소수점이하 1자리표시 (2자리에서 반올림)
num = su5.toFixed(0);
num = parseInt(Math.random()*10); //0~9난수
num = parseInt(Math.random()*10)+5; //5~14난수


demo.innerHTML = num;