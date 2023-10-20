'use strict';
class Member {
    

    // constructor() {}; 생성자는 하나만 가능
    constructor(name,age,color){
        this.name = name;
        this.age = age; 
        this.color = color;
    } //전역에서는 this값이 널이면 -> 전역객체로 키:값(변수명:값) 생성
    //클래스안에서는 this.변수명가 없을때 해당클래스 안에 프로퍼티 생성(변수명:값)

    memberPrint() {
        console.log(name," ",age," ",color);
    }
    
    // _와 $의 의미
    //이름과 같은 방식으로 객체를 식별한다는 의미
    //$ = document.getElementById()의 줄임말
    //_ private의 특성 이 적용되어야 하는 변수나 함수 앞에 그것을 명시하고자 씀


    //getter setter는 접근자프로퍼티
    //프로퍼티는 데이터 프로퍼티거나 접근자 프로퍼티거나 하나에만 속해야하만 둘다 가질수 없음;
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get color(){
        return this._color;
    }

    set name(name){
        this._name = name;
    }
    set age(age){
        if(age<0)
            age=1;
        else
            this._age = age;
    }
    set color(color){
        this._color = color;
    }
}