const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

   
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"


// Task1 filter() students who passed (marks ≥ 40)
let ans=students.filter((acc,studentObj)=>{
if(studentObj.marks>acc){
    return{
        id:studentObj.id,
        name:studentObj.name,
        marks:studentObj.marks
    }
}
},40)
console.log(ans)

// Task2 find() the student who scored 92
let ans2=students.find(studentObj=>studentObj.marks===92)
console.log(ans2)

// Task3map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let ans3=students.map(studentObj=>{
    if(studentObj.marks>=90){
        studentObj.grade='A'
    }
    else if(studentObj.amrks>=75 && studentObj<90){
        studentObj.grade='B'
    }
    else if(studentObj.amrks>=60 && studentObj<75){
        studentObj.grade='C'
    }
    else{
        studentObj.grade='D'
    }
    
})

// ====================================// reduce() to calculate average marks
// let ans4=students.reduce(())
