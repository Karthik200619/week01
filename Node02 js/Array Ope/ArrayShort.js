let marks=[10,30,89,65,45]
// filter(selection)
    //get marks<70
    let result1=marks.filter(element=>element<70)
    console.log(result1)
// map 
let result2=marks.map(element=>element+5)
console.log(result2)

// ****reduce takes 2 values accumulator,element .Intially accumulator stores 1st value and element stores 2nd => and in next run result is stored in accumulator
let result4=marks.reduce((accumulator,element)=>accumulator<element?accumulator:element)
console.log(result4)
// array is [10,30,89,65,45]
let result5=marks.reduce((acc,ele)=>acc+ele)
//                         10  30      40
//                         40  89      129
//                         
//                         
console.log(result5)

// Find
let result6=marks.find(element=>element===30)
console.log(result6)
// FindIndex
let result7=marks.find(element=>element===30)
console.log(result7)

// students(array of Objects)
let students=[
    {sno:1,name:'karthik',age:21},
    {sno:1,name:"shiva",age:21},
    {sno:1,name:"manoj",age:21}

]
let reult=students.map(studentObj=>{
    if(studentObj.name==="manoj"){
        return {
            sno:studentObj.sno,
            name:studentObj.name,
            age:studentObj.age+2
        }
       
    }
     return studentObj
})
console.log(reult)
let result8=students.reduce((sum,studentObj)=>sum+studentObj.age,0)
console.log(result8)

