//?  Function decleration  or defination or statements
function square(num) {
  return num * num;
}
//? Function Expression
const square = (num) => {
  return num * num;
};
//? First Class Function  =  A language  where  the function can be treated like a variable their  function are called the first  class function

const square = (num) => {
  return num * num;
};

function displaySquare(fn) {
  console.log("sqaure is" + fn(5));
}

displaySquare(square);
//? What is IIFE ?(immediatly  invoke the function expression )

(function square(num) {
  console.log(num * num);
})();

//^ output based question asked in the interview
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); // output is 1 /closer  concept lexcial environment

// *  Arguments and parameters

function square(num) {
  //! here the num  is the parameter
  console.log(num * num);
}
square(5); //! here the 5 is the arguments

//^ Spread operator and rest operator

function square(...num) {
  //*  ... nums  is the rest operator
  console.log(num[0] * num[1]);
}
arr = [5, 6];
square(...arr); //* this is the spread operator
