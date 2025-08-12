//*Given an array [1, 2, 3, 4], create a new array where each number is doubled.
// let num = [1, 2, 3, 4];

// let newArray = num.map((nums) => {
//   return nums * 2;
// });

// console.log(newArray);

//*Given an array of strings ["apple", "banana", "cherry"], return a new array containing the length of each string.

// let ArrayString = ["apple", "banana", "cherry"]

// let LengthOfArray = ArrayString.map((ArrayLength) => {
//     return ArrayLength.length
// })

// console.log(LengthOfArray);

//! Filter =  From [5, 10, 15, 20], return only numbers greater than 10.

// let  Arr = [5, 10, 15, 20]

// let GreaterArr = Arr.filter((arr) => {
//      return arr > 10
//  })

// console.log(GreaterArr);

//? Filter =  From ["cat", "dog", "elephant"], return words with length greater than 3.

// let ArrString =  ["cat", "dog", "elephant"]

// let LengthOfArr = ArrString.filter((arrlength) => {
//     return arrlength.length > 3
// })

// console.log(LengthOfArr);

//! Redduce =  Find the sum of [1, 2, 3, 4].

// let numArr = [1, 2, 3, 4]

// ArrSum = numArr.reduce((acc , curr ) => {
//     return acc + curr
// }, 0)

// console.log(ArrSum);

//! Reduce = Find the product of [2, 3, 4].

// let numArray = [2, 3, 4];

// let ProductArry = numArray.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);
// console.log(ProductArry);

//?  Intermediate level

//^ Given [1, 2, 3, 4, 5, 6], square each number and return only those greater than 10.

// let arr = [1, 2, 3, 4, 5, 6];

// let mapArr = arr.map((arr) => {
//   return arr * arr;
// });

// let FinalArr = mapArr.filter((arrfilter) => {
//   return arrfilter > 10;
// });

// console.log(FinalArr);

//^ Given ["John", "Jane", "Jack", "Tom"], return only names starting with J, but in uppercase.

// let arr = ["John", "Jane", "Jack", "Tom"];

// const result = arr
//   .filter((name) => {
//     return name.startsWith("J");
//   })
//   .map((name) => {
//     return name.toUpperCase();
//   });

// console.log(result);

//^ From [5, 10, 15, 20, 25], sum only the numbers greater than 15.

// let numArr = [5, 10, 15, 20, 25]

// let SumResult = numArr.filter((num) => {
//     return num > 15
// }).reduce((acc, curr) => {
//     return acc + curr
// },0)

// console.log(SumResult);

// ^  From an array of objects:
// ^ const users = [
// ^ { name: "Alice", age: 25 },
// ^ { name: "Bob", age: 17 },
// ^  { name: "Charlie", age: 30 }
// ^ ];
// ^  Return the total age of users who are adults (age >= 18).

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
// ];

// let AgeResult = users
//   .filter((user) => {
//     return user.age >= 18;
//   })
//   .reduce((acc, curr) => {
//     return acc + curr.age;
//   }, 0);

// console.log(AgeResult);

// ! Adavance level

// ^  Create a new array of objects with name and their average score.

// const data = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [70, 75, 85] },
// ];

// let newArr = data.map((data) => {
//   const total = data.scores.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   return { name: data.name, scores: total };
// });

// console.log(newArr);

//^ Given [[1, 2], [3, 4], [5, 6]], flatten the array and return the sum of all numbers (using reduce).

// let flattenArray = [[1, 2], [3, 4], [5, 6]]

// let result = flattenArray.reduce((acc, curr) => {
//     return acc + curr.reduce((acc , curr ) => {
//         return acc + curr
//     }, 0)
// }, 0)

// console.log(result);

// ^ Given a sentence "the quick brown fox jumps over the lazy dog the", return an object with the count of each word (e.g., { the: 2, quick: 1, ... }).

// const sentence = "the quick brown fox jumps over the lazy dog the";

// let CountWord = sentence
//   .toLowerCase()
//   .split(" ")
//   .reduce((acc, currWord) => {
//     acc[currWord] = (acc[currWord] || 0) + 1;
//     return acc;
//   }, {});

// console.log(CountWord);

//! Roadside video question

let students = [
  { name: "piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//! 1) Return only name of the  students in capital
//# by for , foreach , map

// let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }
// console.log(names);

// //# foreach
// let names2 = [];
// students.forEach((stdname) => {
//   names2.push(stdname.name.toUpperCase());
// });
// console.log(names2);
// //# Map
// let name3 = students.map((stdname) => stdname.name.toUpperCase());
// console.log(name3);

//! 2) Return only details of those who scored more than 60 marks

// //# by for loop

// let name1 = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks > 60) {
//     name1.push(students[i]);
//   }
// }
// console.log(name1);

// //# by forEach

// let name2 = [];
// students.forEach((stdmark) => {
//   if (stdmark.marks > 60) {
//     name2.push(stdmark);
//   }
// });
// console.log(name2);

// //# filter

// let name3 = students.filter((stdmark) => {
//   return stdmark.marks > 60;
// });

// console.log(name3);

//! sum of marks of all students

// //# for
// let sumMarks = 0;

// for (let i = 0; i < students.length; i++) {
//   sumMarks = sumMarks + students[i].marks;
// }
// console.log(sumMarks);

// //# forEach method
// let sumMark2 = 0;

// students.forEach((totalMark) => {
//   sumMark2 = sumMark2 + totalMark.marks;
// });
// console.log(sumMark2);

// //# reduce
// let Totalmarks = students.reduce((acc, curr) => {
//   return acc + curr.marks;
// }, 0);
// console.log(Totalmarks);

//! Return Total Marks for student with marks greater than 60 after 20 marks have been added to those who scored less than 60

let GarceStudent = students
  .map((students) => {
    if (students.marks < 60) {
      return { ...students, marks: students.marks + 20 };
    }
    return students;
  })
  .filter((students) => {
    return students.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(GarceStudent);

//!  map pollyfil 