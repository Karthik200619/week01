const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
let result0=temperatures.filter(ele=>ele>35)
console.log(result0)
let rs=temperatures.map(ele=>ele*9/5+32)
console.log(rs)
length=0;
let rs3=temperatures.reduce((acc,ele)=>acc+ele,0)/temperatures.length
console.log(rs3)
let rs4=temperatures.find(ele=>ele>40)
console.log(rs4)
let rs5=temperatures.findIndex(ele=>ele===28)
console.log(rs5)

// ============================================================================================
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
const courses = ["javascript", "react", "node", "mongodb", "express"];
let ans=courses.filter(ele=>ele.length>5)
console.log(ans)
let ans1=courses.map(ele=>ele.toUpperCase())
console.log(ans1)
let ans2=courses.reduce((acc,ele)=>acc+ele,"")
console.log(ans2)
let ans3=courses.find(ele=>ele==="react")
console.log(ans3)
let ans4=courses.findIndex(ele=>ele==="node")
console.log(ans4)
// ==================================================================================================
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
let re=marks.filter(ele=>ele>=40)
console.log(re)
let re1=marks.map(ele=>ele+5)
console.log(re1)
let re2=marks.reduce((acc,ele)=>acc>ele?acc:ele)
console.log(re2)
let re3=marks.find(ele=>ele<40)
console.log(re3)
let re4=marks.findIndex(ele=>ele===92)
console.log(re4)