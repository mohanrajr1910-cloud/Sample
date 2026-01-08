interface Student {


}
const student1 : Student = {
name : "Mohan Raj",
age : 27,
isActive : true
}

const student2 : Student = {
    name : "Raghul",
    age : 28,
    isActive : false
}

console.log(student1);
console.log(student2);
//////////////////////////////////////////////////////// TASK 2 ////////////////////////////////////////////////////////
function sub1(a:number,b:number){
    return a-b;
}
function add1(a:number, b:number){
    return a+b;
}
let c = sub1(100,75);
console.log(c);

let d = add1(99,1);
console.log(d);