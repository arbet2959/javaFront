//날짜함수
'use strict';
function calc(){
    let a = document.getElementById("yy").value;
    let b = document.getElementById("mm").value;
    let c = new Date(a,b,0);
    const lastDay = c.getDate();
    console.log(lastDay);
    demo.insertAdjacentHTML("afterbegin",`마지막일은 ${lastDay}`);
}
//오늘 날짜... Date()
const today = new Date();
console.log(today);

const year = today.getFullYear(); //4자리년도
const month = today.getMonth(); //월(0부터시작)
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

console.log(year);
console.log(month+1);
console.log(date);
console.log(hour);
console.log(minute);
console.log(second);

const yymmdd = year+"-"+month+"-"+date+" "+hour+":"+second;
console.log(yymmdd);
console.log(today.toLocaleDateString);
console.log(today.toLocaleTimeString);
console.log(today.toLocaleString);

let weekStr = today.getDay(); //일요일(0)~토(6)
let week = ['일','월','화','수','목','금','토'];
console.log(weekStr);
console.log(week[weekStr]+'요일');

// 해당월의 마지막 일자
let lastDate = new Date(2023, 10, 0);
console.log("lastDate :", lastDate.getDate());