//closures
function closure(){
    var b=0;
    return function deposit(){
        console.log("Balance :"+b);
    }
}
var Balance=closure();
 Balance.deposit;