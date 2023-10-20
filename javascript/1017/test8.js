'use strict';

let arr1 = [
    '문자자료',
    5,
    [2,4,6,8],
    {tel : '010-1234-5678'},
    function(){console.log("안녕하세요");}
];
console.log("arr1 :", arr1);
console.log(arr1[3].tel);
console.log(arr1[4]);

let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,5,7];
arr2[3] = {name: '홍길동'};
arr2[4] = function(){console.log("hi")};
arr2.push(25);
console.log("arr2", arr2);
console.clear();

let str1 = arr2.join('-');
console.log("str 1:", str1);

// arr2.forEach(function(data,idx){
//     console.log(data, idx);
// });
arr2.forEach((data,idx)=>console.log(data, idx));
arr2.map((data,idx)=>console.log(data, idx));

//수식으로 거르기 : filter
arr2.filter(function(data,idx){console.log(data,idx)});
arr2.filter((data,idx)=>console.log(data,idx));
console.log("====================================");
let res1=arr1.filter((data,idx) => idx%2==0);
console.log("res1 :", res1);

// let res2=arr2.filter(idx % 2 ==0).
//             map((data,idx)=>console.log(data, idx)); //filter는 조건에해당하는거 반환; map은 콜백함수가 적용된 새요소 반환

// console.log("res2 :", res);

//정렬 : sort() / reverse()  문자열 
let res3 = arr2.sort();
console.log(res3);
let res4 = arr2.reverse();
console.log(res4);

const arr3 = [10, 8, 20, 15, 11, 17];
console.log("arr3 :",arr3);

let res5 = arr3.sort(); //오름차순 자연정렬
console.log(res5);
let res6 = arr3.reverse();//단순역순
console.log(res6);

// let max= Math.max(arr3); //naN
let max= Math.max(...arr3); 
console.log(max);