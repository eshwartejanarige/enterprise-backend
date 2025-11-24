//closures
function closure(){
    var a=0;
    var b=1;
    return function deposit(){
        console.log("Balance :"+a+b);
    }
}
var Balance=closure();
 Balance();