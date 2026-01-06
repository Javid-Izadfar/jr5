console.log("Hello World!");

// f(x) = 2x

const myName = "jay";
console.log(myName);

// primitive vs non-primitive

// string
const lastName = "Izadfar";
console.log(lastName);

const age = "۳۱";

// number
const realAge = 31;
console.log(realAge);

const a = 2;
const b = 1;
const c = b / a;
console.log(c);

// 1 -> int, 0.5 -> float

const d = 0.2;
const e = 0.1;
console.log(d + e);

console.log(1 + 1);
console.log("a" + "b");
console.log("1" + 1);
console.log(1 + "1");

console.log(1 - 1);
// Not a Number
console.log("b" - "a" + 1);

console.log(typeof myName);
console.log(typeof age);
console.log(typeof realAge);
console.log(typeof 100000);
console.log(typeof -0.242541);
console.log(typeof NaN);
console.log(myName % 12);

// boolean
const isFemale = false;
const isMarried = true;
const isBlack = false;

console.log(true);
console.log(false);

console.log(typeof true);

// or = یا
console.log(true || true);
console.log(false || false);
console.log(false || true);
console.log(true || false);

// and = و
console.log(true && true);
console.log(false && false);
console.log(false && true);
console.log(true && false);

console.log(10 * (2 + 2));
console.log(isFemale || (isBlack && isMarried));

// truthfully
console.log(2154 || false);
console.log("jay" || false);
console.log(true || false);
console.log(2154 && false);
console.log("jay" && true);

// falsely
console.log(0 || false);
console.log(0 || true);
console.log(0 && true);

console.log(true || "iman");
console.log("iman" || true);
console.log(true && "iman");
console.log("iman" && true);

console.log(myName);
console.log(!myName);
console.log(!0);
console.log(!!myName);
console.log(!!0);

console.log(+false);
console.log(+true);
console.log(2 + true);
console.log(+myName);
console.log(0 * myName);
console.log("jay" + false);

const humanRight = undefined;
console.log();
// console.log(foo)
console.log(humanRight);
console.log(typeof humanRight);
// console.log(typeof)

const outerSpace = null;
console.log(outerSpace);
console.log(typeof outerSpace);

const me = {
  firstName: "javid",
  lastName: "Izadfar",
  age: 31,
  isMarried: true,
  children: undefined,
  foo: myName,
};
console.log(me);
console.log(typeof me);
