function isEmpty(obj){
    let ans=true
    for(let key in obj){
        ans=false
    }
    return ans
}
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false