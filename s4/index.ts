const firstName: string = "jay";
// const lastName: string = 12

const age: number = 32;
const is_married: boolean = true;

const pow = (a: number): number => {
  return a * a;
};

console.log(pow(2));

type Course = {
  name: string;
  number: number;
};
type Place = Record<string, string>;

type Person = {
  name: string;
  age: number;
  is_married: boolean;
  course?: Course | null;
  birth_place?: Place;
  education?: any;
};

const javid: Person = {
  name: "jay",
  age: 32,
  is_married: true,
};
const iman: Person = {
  name: "iman",
  age: 37,
  is_married: false,
  course: {
    name: "JustReact",
    number: 4,
  },
};

const people: Person[] = [javid, iman];
