// Conditions
if (true) {
  console.log("here");
}

if (false) {
  console.log("here");
} else {
  console.log("there");
}

const number = 2;
if (number < 1) {
  console.log("smaller than one");
} else if (number <= 2) {
  console.log("smaller or equal to two");
} else {
  console.log("larger");
}

switch (number) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("other");
    break;
}

console.log(1 < number);
console.log(3 >= number);
console.log(2 == number);
console.log("2" == number);
console.log(2 === number);
console.log("2" === number);

// Loop - Iteration

// const arr = ['a', 'b', 'c']

// for (let i = 0; i < arr.length; i = i + 2) {
//     console.log(arr[i])
// }

const reverse = (arr) => {
  const res = [];
  console.log(arr.length);
  for (let i = arr.length - 1; i > -1; i = i - 1) {
    res.push(arr[i]);
  }
  return res;
};

const result1 = reverse([1, 2, 3]); // [3, 2, 1]
console.log(result1);

const skipped = (arr) => {
  const res = [];
  let i = 0;
  for (i; i < arr.length; i = i + 2) {
    res.push(arr[i]);
    console.log(i);
  }
  console.log(i);

  return res;
};

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const result2 = skipped(alphabet); // ['A', 'C', 'E', ...]
console.log(result2);

// const arr = ['a', 'b', 'c']
// let i = 0

// while (i < arr.length) {
//     console.log(arr[i])
//     i = i + 1
//     console.log(i)
// }
// console.log(i)

const getPow = (ceil) => {
  let count = 0;
  let result = 1;

  while (result < ceil) {
    result = result * 2;
    count = count + 1;
  }
  return count;
};

const result3 = getPow(200); // 8
console.log(result3);

// const arr = ['a', 'b', 'c']
// let i = 0

// do {
//     console.log(i)
//     i = i + 1
// } while (i < arr.length)

// for (const value of arr) {
//     console.log(value)
// }

const countOfEvens = (arr) => {
  let count = 0;
  for (const value of arr) {
    // if (!(value % 2)) {
    //     count++
    // }
    if (value % 2) {
      continue;
    }
    count++;
  }
  return count;
};
const result4 = countOfEvens([1, 5, 4, 2, 7, 8, 9]); // 3
console.log(result4);

const firstEven = (arr) => {
  let res = undefined;
  let i = 0;
  for (const value of arr) {
    i++;
    if (!(value % 2)) {
      res = value;
      break;
    }
  }
  console.log(i);
  return res;
};
const result5 = firstEven([1, 5, 4, 2, 7, 8, 9]); // 4
console.log(result5);

const person = {
  name: "Jay",
  age: 31,
  isMarried: true,
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.fromEntries([["foo", "bar"]]));

const personArr = Object.entries(person);
// [
//     ['name', 'Jay'],
//     ['age', 31],
//     ['isMarried', true]
// ]
const newPersonArr = [];
for (const item of personArr) {
  if (typeof item[1] === "string") {
    console.log(item);
    newPersonArr.push(item);
  }
}
console.log(newPersonArr);
const newPersonObj = Object.fromEntries(newPersonArr);
console.log(newPersonObj);

for (const itemKey in person) {
  console.log(itemKey);
}
