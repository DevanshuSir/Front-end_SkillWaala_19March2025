// console.log("Kal ho na ho ");

// dsfghjkljhgfdsf;

// console.log("Hello SkillWaalo");

let num1 = parseInt(prompt("Enter first number :- "));
let num2 = parseInt(prompt("Enter second number :- "));
let operator = prompt("Enter Operator (+,-,/,*) :- ");

let result = "";

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else {
  console.log("Invalid Input");
}

console.log(num1 + operator + num2 + " = " + result);
