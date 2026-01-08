
interface User{
    id:number;
    name:string;
    address : {
        city:string;
        pincode:number;
    };
}

let user : User ={
    id: 10,
    name: "Leo MEssi",
    address : {
        city:"Burno Aeris",
        pincode:101010
    }

}

console.log(user);