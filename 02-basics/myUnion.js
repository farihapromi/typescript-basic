var score;
score = 44;
score = "56";
var promi = { name: "fariha", id: 293004 };
// promi={userName:"rima",id:677}
function getDb(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else {
        return "Number received: ".concat(id);
    }
}
console.log(getDb(5));
