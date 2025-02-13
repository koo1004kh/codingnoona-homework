//1
let h=0
for(let i=1;i<=100;i++){
    h+=i
}
console.log(h)

//2
for(let i=1;i<=100;i++){
    if(i%2==1){
        console.log(i)
    }
}

//3

for(let i=1;i<=50;i++){
    let s=i.toString()
    let ss=""
    for(j=0;j<s.length;j++){
        if(s[j]=='3' || s[j]=='6' || s[j]=='9'){
            ss+="짝"
        }
    }
    console.log(ss.length>0?ss:i)
}

//4
let number = 3
let k=0
for(let i=2;i<number;i++){
    if(number%i==0){
        k+=1
    }
}
if(k==0){
    console.log("true")
}
else{
    console.log("false")
}