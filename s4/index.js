console.log('hi')

// JavaScript = EcmaScript (ES 6+)
// Polyfill -> BABEL + BrowserList(CanIUse)

const jay = {
    name: 'Javid',
    age: 32,
    is_married: true,
    course: {
        title: 'JustReact',
        number: 5
    }
}

// # Shallow Copy
// spread
const person = {...jay}
console.log(person)

person.name = 'Parsa'
console.log(jay)
console.log(person)

const emptyObj = {}
const person2 = Object.assign(emptyObj, jay)
person2.name = 'Ali'
console.log(person2)
console.log(jay)

console.log(jay)
console.log(person)
person.course.number = 10
console.log(person)
console.log(jay)

// # Deep Copy
// JSON ~ JavaScript Object Notion
// const foo = {
//     "key1": "value",
//     "key2": "value"
// }

const stringed = JSON.stringify(jay);
console.log(stringed)
const person3 = JSON.parse(stringed)
person3.course.number = 20
console.log(person3)
console.log(jay)

const person4 = structuredClone(jay)
person4?.course?.number = 40
console.log(person4)
console.log(jay)

console.log('first')

