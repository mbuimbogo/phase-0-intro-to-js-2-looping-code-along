// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
let events = "surprise";
function writeCards(names) {
  let messages = [];
  for ( let i = 0; i < names.length; i++) {
   messages[i] = (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return messages;
};
console.log(writeCards())

let numbers = [10, 9, 8,7,6,5,4,3,2,1,0]
function countDown(numbers) {
  let number = 10;
  while (number >= 0) {
    console.log(number);
    number--;
  }
  return numbers;
}
