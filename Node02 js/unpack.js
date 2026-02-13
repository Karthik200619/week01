let test={
    a:10,
    b:20,
    c:'karthik'
}
// Unpacking..........
let {a,b,c}=test


//  *****************Point to remeber {The variable name's must match the object key name's}**************

// Complex Object
let student={
    sno:100,
    name:"karthik",
    marks:[90,80,56],
    address:{
        city:"Hderabad",
        pincode:501510
    },
    getAverage:function(){
        mark=this.marks
        let len=0
        let sum=0
        for(mar of mark){
            len=len+1
            sum+=mar
        }
        return sum/len;

    }
}
console.log(student.getAverage())