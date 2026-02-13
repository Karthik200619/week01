let emp={
    eno:1,
    name:"karthik"
}
// accessing props
console.log(emp.eno)//1

// ----------------------------------------------------------------------------------
// Adding new prop Dynamically
emp.city='hyderabad'

// Update a property
emp.eno=123

// delete a property
delete emp.name

// freeze an object 
Object.freeze(emp)
emp.eno=12345;

// read All keys
console.log(Object.keys(emp))
// read All values
console.log(Object.values(emp))

console.log(emp)