//closures
function closure(){
    var a=0;
    return function deposit(){
        console.log("Balance :"+a);
    }
}
var Balance=closure();
 Balance.deposit;