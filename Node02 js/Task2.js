
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90
let sum=0
let len=0
for(let mark in marks){
    let temp=marks[mark]
    sum+=temp
    len=len+1
}
console.log(sum)
