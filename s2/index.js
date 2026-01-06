console.log("hi - s02");

// Primitive
const firstName = "Javid";
const age = 31;
const isMarried = true;

// Non-Primitive
const jay = {
  firstName: "Javid",
  age: 31,
  isMarried: true,
};

console.log(jay);

const teacher = jay;

console.log(teacher);

jay.lastName = "Izadfar";

// pass by reference

console.log(jay);
console.log(teacher);

// Heap

// Stack -> First In/ Last Out

// /////////////////

// Primitive => stored in some kind of stack
// Non-Primitive => stored values in some kind of heap,
//     creates a reference,
//     stores ref in stack

const jayName = firstName;
console.log(jayName);

// pass by value

// f(x) = 2x
const byTwo = (x) => {
  console.log(x);
  return 2 * x;
};

console.log(byTwo(4));

const inc = (x) => {
  // x -> 1x03
  return x + 1;
};

const a = 1;
// a -> 1x00
const c = a;
// a -> 1x01
const b = inc(a);
// b -> 1x04
console.log(a);
console.log(b);

const change = (x) => {
  // x -> 1x002
  console.log(x);
  x = 10;
  console.log(x);
};

// n -> 1x001
const n = 5;

change(n);

console.log(n);

const pow = (x) => {
  // x -> 1x001
  // res -> 1x002

  const result = x * x;
  return result;
};

// m -> 1x000
const m = 2;

// o -> 1x003
const o = pow(m);
// p -> 1x006
const p = pow(10);

console.log(m);
console.log(o);

const change2 = (x) => {
  //   const x = 10
  return x;
};

const q = 5;
const result = change2(q);

console.log(q);
console.log(result);

// const myFunc = (x) => {
//     return x - 10
// }

const myFunc = (x) => x - 10;

console.log(1, 2);

// 1x001
const set = (obj) => {
  // 1x003 => ref1
  obj.bar = 10;
};
// 1x002 => ref1
const state = { value: 1, foo: 2 };
const foo = set(state);

console.log(foo);
console.log(state.bar);

const update = (person, age) => {
  person.age = age;
  person = { name: "New Person", age: 50 };
  console.log(person);
};

const user = { name: "Alice", age: 25 };
update(user, 30);

console.log(user);

// Arrays
const nums = [1, 2, 3, 4];
console.log(typeof nums);
console.log(nums[3]);

const charObj = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  length: 4,
};
const charArr = ["a", "b", "c", "d"];
console.log(charObj[0]);
console.log(charArr[0]);
console.log(jay["firstName"]);
console.log(jay.firstName);

charArr.push("e");
console.log(charArr);
console.log(charArr.length);
console.log(charObj.length);

const a2 = [1, 2];
const b2 = a2;
b2[0] = 10;
console.log(a2[0]);

console.log(charArr);

charArr.pop();
console.log(charArr);

const charArr2 = charArr.slice(1);
console.log(charArr);
console.log(charArr2);

const charArr3 = charArr.slice(2, 4);
console.log(charArr3);

charArr.splice(1, 2);
console.log(charArr);

charArr.splice(0, 0, "j");
console.log(charArr);

const charString = charArr.join("");
console.log(charArr);
console.log(charString);

const charArr4 = charString.split("");
console.log(charArr4);

const charArr5 = charArr4.concat(["e", "f"]);
console.log(charArr5);

const card = "6219-8610-3279-9560";
// ['6219', '8610', '3279', '9560']
// ['6219', '****', '****', '9560']

const cardArr = card.split("-");
// TODO: use some array methods (?)
cardArr[1] = "****";
cardArr[2] = "****";

console.log(cardArr.join("-"));
// console.log(cardArr.slice(1, 3))
// console.log(cardArr.splice(1, 3))
// cardArr.slice(1, 2)
// console.log(cardArr)
// const onlyStartAndEnd =
// console.log(onlyStartAndEnd)

console.log(cardArr);
console.log(
  card.split("-").slice(0, 1).concat("****", "****", cardArr.slice(3)).join("-")
);
