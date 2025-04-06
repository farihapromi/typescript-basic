const user={
    name:'promi',
    email:"promi@gmail.com",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){}
createUser({name:"fariha",isPaid:false})
//function type is object
function createNewUser():{}{
    return {}
}

//creating own data types
// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }
// function newUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }
// newUser({name:"",email:"",isActive:true})

type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean
}
let myUser:User={
    _id:"1223455f",
    name:"Promi",
    email:'promi@gm',
    isActive:true
}
type cardNumber={
    cardNumber:string
}
type cardDate={
    cardDate:string
}
type cardDetails=cardNumber & cardDate &{
    cvv:number
}
export {}