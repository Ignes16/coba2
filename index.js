console.log("Hello Javascript")

/*
Let-> Local, hanya berlaku di scopenya saja
var-> global, berlaku di semua scope
const -> local &tidak bisa diganti

*/



// if(true){
//     var a = "Hello";
//     a="HI"
    
// }
// console.log(a)

const num = 10;

if(num===10){
    console.log("num is 10");
}else if(num<10){
    console.log("num is lower than 10");
}else if(num>10){
    console.log("num is grater than 10");
}else{
    console.log("num is not a number");
}


for(let i=0; i<10; i++){
    console.log(i);
}