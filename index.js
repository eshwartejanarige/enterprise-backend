//closures
function closure(){
    var z=0;
    var b=1;
    var gst=0.5
    var change="everyting"
    return function deposit(){
        console.log("Balance :"+a+b+0.5);
    }
}
function c(){
    var op=0;
    var b=1;
    var gst=0.5
    return function deposit(){
        console.log("Balance :"+a+b+0.5);
    }
}
var Balance=closure();
 Balance.deposit;