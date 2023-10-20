'use strict';

function fCheck(){
    const regMid = /^[\w]{4,20}$/;
    const regPwd = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(){}\[\].,/?]).{4,20}$/;
    const regNickName = /^[가-힣]{1,8}$/;
    const regName = /^[가-힣]{2,10}$/;
    const regEmail = /^[0-9a-zA-Z]+@[\w]+\.(com|net)$/;
    const regHomePage = /^(https?:\/\/)?www\.[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?\/?$/;
    const regBirth = /^[\d]{4}-([0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    
    let mid = document.getElementById("mid").value;
    let pwd = document.getElementById("pwd").value;
    let nickName = document.getElementById("nickName").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let homePage = document.getElementById("homePage").value;
    let birthday = document.getElementById("birthday").value;

    console.log(mid,pwd,name,nickName,email,homePage,birthday);
    console.log(typeof birthday);
    console.log(regBirth.test("2023-10-28"));
    // if(!mid.match(regMid)){
    if(!regMid.test(mid)){
        alert("아이디는 영문 대/소문자,숫자,_만 가능하고 4~20자입니다.");
        document.getElementById("mid").focus();
        return;
    }
    if(!regPwd.test(pwd)){
        alert("비밀번호는 영문+숫자+특수문자");
        document.getElementById("pwd").focus();
        return;
    }
    if(!regNickName.test(nickName)){
        alert("닉네임은 1~8글자한글");
        document.getElementById("nickName").focus();
        return;
    }
    if(!regName.test(name)){
        alert("이름은 2~10글자 한글");
        document.getElementById("name").focus();
        return;
    }
    if(!regEmail.test(email)){
        alert("이메일형식오류");
        document.getElementById("email").focus();
        return;
    }
    if(!regHomePage.test(homePage)){
        alert("url형식오류");
        document.getElementById("homePage").focus();
        return;
    }
    if(!regBirth.test(birthday)){
        alert("???");
        document.getElementById("birthday").focus();
        return;
    }
    alert("통과")
}