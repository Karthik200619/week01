let message;
let isLoggedIn = true;
let isProfileCompleted = false;
if(isLoggedIn===false){
    message="Please Login";
}
else{
    if(isProfileCompleted===false){
        message="Complete your profile";
    }
    else{
        message="Welcome back";
    }
}
console.log(message);