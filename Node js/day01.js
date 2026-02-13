let totalAmount = 0;
function addToTotal(amount){
    totalAmount += amount;

}
function discountedPrice(amount){
    totalAmount-=amount;
}
function gst(percent){
    totalAmount+=totalAmount*percent/100;
}
addToTotal(100);
addToTotal(1200);
discountedPrice(200);
gst(18);
console.log(totalAmount);