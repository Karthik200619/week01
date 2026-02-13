let marks=[10,20,30,40,50];
// for of disadvantage index not access
// for(let mark of marks){
//     console.log(mark);
// }
let sum=0;
// for(let mark of marks){
//     sum+=mark;
    
// }
// console.log(sum);
//write a function that recives marks array as argument and return small element
// function smallElement(marks){
//     let small=marks[0];
//     for(let mark of marks){
//         if(mark<small){
//             small=mark;
//         }
//     }
//     return small;
// }
// console.log(smallElement(marks));
let skills=["html","css","js"]
let skill="html"

function findSkill(skills,skill){
    for(let i=0;i<skills.length;i++){
        let skillName=skills[i];
        if(skillName===skill){
            return i;
        }
        else{
            return 'not found'
        }
    }
}
let ans=findSkill(skills,skill);
console.log(ans);
