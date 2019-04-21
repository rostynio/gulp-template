

var dollar = 26.7;
var samsung = 700 * dollar;
var xiaomi = 500 * dollar;


var Samsung = document.getElementById('samsung');
var Xiaomi = document.getElementById('xiaomi');
var answer = document.getElementById('answer');

Samsung.innerHTML = samsung;
Xiaomi.innerHTML = xiaomi;

if (dollar > 26 || dollar == 26){
    Samsung.innerHTML = samsung;
    Xiaomi.innerHTML = xiaomi;
} else {
    document.getElementById('app').style.display = "none";
    answer.innerHTML = "this item is not available"
}