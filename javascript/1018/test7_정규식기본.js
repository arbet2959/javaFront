'use strict';

function regexCheck() {
    const regex1 = /atom/g;
    const regex2 = /kbs|mbc|sbs|cjs/g;
    const regex3 = /홍길(동|순)/g;
    const regex4 = /[a-z]/s;
    const regex5 = /[^a-z]/g;
    const regex6 = /[A-Z]/g;
    const regex7 = /[^A-Z]/g; //영어대문자아닌것이 있는가?
    const regex8 = /[0-9]/g;
    const regex9 = /[^0-9]/g;
    const regex10 = /[가-힣]/g; 
    const regex11 = /[^가-힣]/g; 
    const regex12 = /[a-zA-z0-9]/g; 
    
    const regex21 = /\./g;
    const regex22 = /\d/g;
    const regex23 = /\D/g;
    const regex24 = /\w/g;
    const regex25 = /\W/g;
    const regex26 = /\s/g;
    const regex31 = /^홍길자?$/;
    let content = document.getElementById("content").value.trim();

    if(content ==""){
        alert("문자열을 입력하세요");
        return;
    }
    if(!regex31.test(content)){
        alert("정규식통과실패")
        return;
    }
    alert("통과")
}