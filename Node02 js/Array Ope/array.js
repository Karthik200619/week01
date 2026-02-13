// callback function -a function send as a arg to another function


function test1(a){
    console.log(a)
    console.log(a())
}

test1(()=>{  // Who is calling test1 the answer is test1 is called by application +
    return 123;
})

