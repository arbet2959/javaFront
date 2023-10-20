//문자함수 연습
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let text2 = '   ABC    BCABC    GHI   JKLABCMN........ ABC... OPQ';

// length : 길이
// substring() : 문자열검색(index값반환 없으면 -1)
//indexOf() : 문자열검색 (index반환)
//includes() : 문자열 검색(T/F반환)
// concat(): 문자열 결합
// slice() : 지정된 인덱스 위치부터 문자열 가져오기
// trim() : 문자열의 앞뒤 공백 절삭
//replace() replaceAll()
//toLowercase() toUpperCase()
//concat()
//split() : 문자열 분리시켜서 집합으로 만들어줌
let str = "0123456789012345678901234567890<br>";
str += text1 +'<br>';
str += text2 + '<hr><br>';

// str+= text1.substring(5);
// str += text1.indexOf('abc');
// str += text1.slice(5,10);    5~9까지(음수로 뒤에서부터 계산가능)
// str += text1.substring(5,10); 5~9까지 (음수는 0취급)
// str += text1.substr(5,10); 5에서부터 10개
// str += text2.replace('ABC', 'ooppqq'); //처음 검색되는것 치환
// str += text2.replaceAll('ABC', 'ooppqq'); //전부 치환
// str += text1.toLowerCase();
// str += text1.toUpperCase();
// str += text1.concat("안녕1","안녕2") text 안녕1 안녕2 순서로 합침
// str += text2.trim();
// str += text2.trimStart();
// str += text2.trimEnd();
// str += text.charAt(1);
// str += "안녕1" + text1.charCodeAt(1) + "안녕2";

// let temp = text2.split('ABC');
// for(let s of temp) {
//     str += s+'<br>';
// }

let title=['지역번호','국번호','전화번호'];
let telTemp = '010-1234-5678';

let tels = telTemp.split("-");
tels.forEach((data,idx)=>console.log(data,idx));
tels.forEach((data,idx)=>str +=data+'<br>');


demo.innerHTML =str;
