
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// =====================================================================================================
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"


// Use filter() to get only inStock products
let rs=cart.filter(cartObj=>{
    if(cartObj.inStock==true){
        return{
            id:cartObj.id,
            name:cartObj.name,
            price:cartObj.price,
            quantity:cartObj.quantity,
            inStock:cartObj.inStock
        }
    }
})
console.log(rs)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Use map() to create a new array with:  { name, totalPrice }
let r2=cart.map(cartObj=>{
    return{
        id:cartObj.id,
        name:cartObj.name
    }
})
console.log(r2)
//Task3------------------------------------------------------------------
// Use reduce() to calculate grand total cart value
let r3=cart.reduce((acc,ele)=>acc+ele.price,0)
console.log(r3)
// **************************************************************************************
// Use find() to get details of "Mouse"
let r4=cart.find(ele=>ele.name==='Mouse')
console.log(r4)
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Use findIndex() to find the position of "Keyboard"
let r5=cart.findIndex(ele=>ele.name==='Keyboard')
console.log(r5)
