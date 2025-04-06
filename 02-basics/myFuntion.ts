function addTwoNum(num:number):number{
    return num+2;
}
addTwoNum(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("Promi")
const heros=['ironman','Spiderman','batman']
heros.map(hero=>{
    return `hero is ${hero}`
})

function handleError(errmsg:string):never{
    throw new Error(errmsg)

}
export {}