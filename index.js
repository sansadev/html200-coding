///bank application functions
let total = 0;
function userQuit() {
  //let quit=prompt("Enter Q to quit");

}
function userWithdraw() {
 let amount = prompt("please enter amount");

if(amount >= 50000){
  alert("You can not withdraw more than 50,000")
}
else if(amount >= total){
  alert("withdrawl amount can not be greater than Balance amount.");
}
else{  total -= amount;}
main();
}
function userDeposite() {
let deposite = prompt("please enter amount");
total += Number(deposite);
main();

}
function userBalance() {

alert(`Total Amount is: ${total}`);
main();
}

function main() {
  let input=prompt("Please enter 'Q' to Quit, 'W' to withdraw, 'B' to Balance & 'D' to deposite");
  switch(input){
      case 'W':
           userWithdraw();
      break;
      case 'D':
        userDeposite();
      break;
      case 'B':
            userBalance();
      break;
      case 'Q':
          userQuit();
      break;
      default:
     alert("No value found");
  }
}
