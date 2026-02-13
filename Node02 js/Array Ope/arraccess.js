// Array Accessing
let skills=['html','css','js']

// Accessing elements(destructue)
let [skills1,skills2,skill3]=skills
console.log(skill3)


// Inserting 
           //at Start{unshift}
           skills.unshift('angular')
           console.log(skills)
            //at end{push}
            skills.push('pyhton')    
            console.log(skills)
            // In Between { splice(IndexVal, DeleteCount, elements)}
            skills.splice(1,0,'scala')
            console.log(skills)
// Delete methods
            //at start { shift}
            skills.shift()
            console.log(skills)
            //at end
            skills.pop()
            console.log(skills)
            //In Between { splice(index, number of deletions)}
            skills.shift(1,1)
            console.log(skills)
