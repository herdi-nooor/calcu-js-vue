// // key-number click function

// const plusminus = "";

// plusminus.addEventListener("click", (evet) => {
//   let cur = '';
//   let cek = String(currentNumber);
//   const firstDigitStr = String(currentNumber)[0];

//   if (firstDigitStr === "-") {
//     cur = cek.substring(1);
//     currentNumber = Number(cur) ;
//     updateScreen(currentNumber);
//   } else {
//     cur = "-" + currentNumber;
//     currentNumber = cur ;
//     updateScreen(currentNumber);
//   }
// });

// // input function
// const inputNumber = (number) => {
//   if (currentNumber === "0") {
//     currentNumber = number;
//   } else {
//     currentNumber += number;
//   }
// };

// // input operator
// const operator = "";

// operator.forEach((operator) => {
//   operator.addEventListener("click", (event) => {
//     inputOperator(event.target.value);
//   });
// });

// const inputOperator = (operator) => {
//   if (calculationOperator === "") {
//     prevNumber = currentNumber;
//   } else {
//     calculate();
//     prevNumber = currentNumber;
//   }
//   calculationOperator = operator;
//   currentNumber = "0";
//   updateScreen(currentNumber);
// };

// // calculation event function
// const equalSign = "";

// equalSign.addEventListener("click", () => {
//   calculate();
//   updateScreen(currentNumber);
// });

// const calculate = () => {
//   let result = "";
//   switch (calculationOperator) {
//     case "+":
//       result = parseFloat(prevNumber) + parseFloat(currentNumber);
//       break;
//     case "-":
//       result = parseFloat(prevNumber) - parseFloat(currentNumber);
//       break;
//     case "*":
//       result = parseFloat(prevNumber) * parseFloat(currentNumber);
//       break;
//     case "/":
//       result = parseFloat(prevNumber) / parseFloat(currentNumber);
//       break;
//     default:
//       break;
//   }
//   updatePrevCalcu(prevNumber, calculationOperator, currentNumber, result);
//   if (prevNumber === "0") {
//     currentNumber = "0";
//   }
//   currentNumber = result;
//   calculationOperator = "";
// };

// const prevcalcu = "";

// const updatePrevCalcu = (prev, Operator, curren, result) => {
//   prevcalcu.value = prev + " " + Operator + " " + curren + " = " + result;
// };

// // clenner function
// const clearBtn = "";

// const claerAll = () => {
//   prevNumber = "";
//   calculationOperator = "";
//   currentNumber = "0";
//   prevcalcu.value = " ";
// };

// clearBtn.addEventListener("click", () => {
//   claerAll();
//   updateScreen(currentNumber);
// });

// // function for decimal value
// const decimal = "";
// const inputDecimal = (dot) => {
//   if (currentNumber.includes(".")) {
//     return;
//   }
//   currentNumber += dot;
// };

// decimal.addEventListener("click", (event) => {
//   inputDecimal(event.target.value);
//   updateScreen(currentNumber);
// });

// //zero value handling
// const dzero = "";

// dzero.addEventListener("click", () => {
//   if (calculatorScreen.value === "0") {
//     claerAll();
//     updateScreen("0");
//   } else {
//     inputNumber("00");
//     updateScreen(currentNumber);
//   }
// });

// const zero = "";

// zero.addEventListener("click", () => {
//   if (calculatorScreen.value === "0") {
//     claerAll();
//     updateScreen("0");
//   } else {
//     inputNumber("0");
//     updateScreen(currentNumber);
//   }
// });
// // name: "calcu",
// //   data() {
// //     return {
// //       prevNumber: "",
// //       calculationOperator: "",
// //       currentNumber: "0",
// //       button: 
// //     };
// //   },
  
