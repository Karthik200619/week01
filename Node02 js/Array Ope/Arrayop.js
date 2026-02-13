// write a function that can extarct marks greater than 70, tag them into an array and return it
marks = [90, 70, 40, 89, 56]
function marksGreaterThan() {
    let arr = [];
    let i = 0;
    for (let num of marks) {
        if (num > 70) {
            arr[i++] = num
        }
    }
    return arr;
}
console.log(marksGreaterThan())
// fileter
let result=marks.filter(function(ele){
    return ele>70
})
// find all marks between 30 and 90
let result2=marks.filter(function(ele){
    return ele>30 && ele<=90
})
console.log(result2)

let salaries=[100,200,300]
let result4=[]
function addBonus(){
    for(let num of salaries){
        result4.push(num+50)
    }
    return result4
}
console.log(addBonus())
// Using map 
let result3=salaries.map(function(ele){
    return ele+50
})
console.log(result3)
console.log(salaries)

