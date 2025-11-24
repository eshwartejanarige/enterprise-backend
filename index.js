//closures
function closure(){
    var z=0;
    return function deposit(){
        console.log("Balance :"+z);
    }
}
var Balance=closure();
 Balance.deposit;