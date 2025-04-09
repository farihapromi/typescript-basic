let score:number|string
score=44;
score="56"

type myUser={
    name:string;
    id:number
}
type Admin={
    userName:string,
    id:number
}
let promi:myUser|Admin={name:"fariha",id:293004}
// promi={userName:"rima",id:677}
function getDb(id: string | number): string {
    if (typeof id === "string") {
      return id.toLowerCase();
    } else {
      return `Number received: ${id}`;
    }
  }
  
  console.log(getDb(5)); 
  
  //array
  const data:number[]=[1,2,3]
  const data2:string[]=["1","2","3"]
  //it can either string or number,can not combination of both
  const data3:string[]|number[]=["1","3","5"]
  //if we want both type.It will allow combincation of string and  number
  const myData:(string|number)[]=[1,2,"3","5"]