//(문제1) 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오
let a = -1
if(a<0){
    console.log("음수")
}
else if(a==0){
    console.log(0)
}
else{
    console.log("양수")
}

//(문제2) 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오
let score=98
let grade= 'idk'
if(score>=90 && score<=100){
    grade='A'
}
else if(score>=80 && score<=89){
    grade='B'
}
else if(score>=70 && score<=79){
    grade='C'
}
else if(score>=60 && score<=69){
    grade='D'
}
else{
    grade='F'
}
console.log(grade)

//(문제3) 회사 면접 문제
let skills=["HTML","CSS","Javascript","React"]
if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
}
else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
}
else{
    console.log("탈락")
}