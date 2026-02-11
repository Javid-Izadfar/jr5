type Scores = {
  math: number;
  js: number;
  algorithms: number;
};
type Grade = "A" | "B" | "C" | "D" | "F";
type Hobby = "coding" | "gaming" | "reading" | "music" | "sports";
type Major = "Data Science" | "Computer Science" | "Software Engineering";
type Student = {
  id: number;
  name: string;
  age: number | "n/a";
  grade: Grade;
  major: Major;
  scores: Scores;
  hobbies: Hobby[];
  isActive: boolean;
};

const students: Student[] = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 20,
    grade: "A",
    major: "Computer Science",
    scores: { math: 92, js: 88, algorithms: 85 },
    hobbies: ["coding", "gaming", "reading"],
    isActive: true,
  },
  {
    id: 2,
    name: "Sarah Miller",
    age: 22,
    grade: "B",
    major: "Data Science",
    scores: { math: 78, js: 81, algorithms: 75 },
    hobbies: [],
    isActive: false,
  },
  {
    id: 3,
    name: "Daniel Smith",
    age: 19,
    grade: "A",
    major: "Software Engineering",
    scores: { math: 95, js: 90, algorithms: 93 },
    hobbies: ["coding", "music"],
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    age: 21,
    grade: "C",
    major: "Computer Science",
    scores: { math: 68, js: 72, algorithms: 70 },
    hobbies: ["reading"],
    isActive: true,
  },
  {
    id: 5,
    name: "Michael Davis",
    age: 23,
    grade: "B",
    major: "Data Science",
    scores: { math: 85, js: 79, algorithms: 88 },
    hobbies: ["coding", "reading", "music", "sports"],
    isActive: false,
  },
  {
    id: 6,
    name: "Jessica Wilson",
    age: 20,
    grade: "A",
    major: "Computer Science",
    scores: { math: 91, js: 94, algorithms: 89 },
    hobbies: ["coding", "gaming", "reading", "music", "sports"],
    isActive: true,
  },
  {
    id: 7,
    name: "Ryan Taylor",
    age: 22,
    grade: "C",
    major: "Software Engineering",
    scores: { math: 65, js: 70, algorithms: 68 },
    hobbies: ["sports"],
    isActive: false,
  },
  {
    id: 8,
    name: "Olivia Anderson",
    age: 19,
    grade: "B",
    major: "Software Engineering",
    scores: { math: 82, js: 86, algorithms: 80 },
    hobbies: ["gaming", "music"],
    isActive: true,
  },
  {
    id: 9,
    name: "James Thompson",
    age: 24,
    grade: "B",
    major: "Computer Science",
    scores: { math: 88, js: 83, algorithms: 85 },
    hobbies: ["coding"],
    isActive: false,
  },
  {
    id: 10,
    name: "Sophia Martinez",
    age: 21,
    grade: "A",
    major: "Data Science",
    scores: { math: 96, js: 91, algorithms: 94 },
    hobbies: ["coding", "reading", "music"],
    isActive: true,
  },
];

const sayHi = (student: Student) => {
  console.log(student.name);
};
students.forEach(sayHi);
sayHi(students[0]);

students.forEach((student: Student) => {
  console.log(student.major);
});

const studentMajorCount: {
  [key: string]: number;
} = {
  // 'Computer Science': 0,
  // 'Data Science': 0,
  // 'Software Engineering': 0
};
students.forEach((student: Student) => {
  if (!studentMajorCount[student.major]) {
    studentMajorCount[student.major] = 0;
  }
  studentMajorCount[student.major]++;
});
console.log(studentMajorCount);

let sumOfAges = 0;
students.forEach((student: Student) => {
  if (student.age !== "n/a") {
    sumOfAges += student.age;
  }
});
console.log(sumOfAges / students.length);

let topStudent = students[0];
students.forEach((student: Student) => {
  if (student.scores.js > topStudent.scores.js) {
    topStudent = student;
  }
});
console.log(topStudent.name, topStudent.scores.js);

const inActiveStudents: Student[] = [];
students.forEach((student: Student) => {
  if (!student.isActive) {
    inActiveStudents.push(student);
  }
});
console.log(inActiveStudents);

const inActiveStudents2 = students.filter((student) => {
  return !student.isActive;
});
console.log(inActiveStudents2);

const studentNames = inActiveStudents2.map((student) => {
  return student.name;
});
console.log(studentNames);

console.log(
  students
    .filter((student) => {
      return !student.isActive;
    })
    .map((student) => {
      return student.name;
    })
);

const names = students
  .filter((student) => !student.isActive)
  .map((student) => student.name);

const ryan = students.find((student) => student.name === "Ryan Taylor");
console.log(ryan);
const ryans = students.filter((student) => student.name === "Ryan Taylor");
console.log(ryans);

const studentsWithCodingHobby = students.filter((student) => {
  // const codingHobby = student.hobbies.find(hobby => hobby === 'coding')
  // const hasHobby = !!codingHobby
  const coddingHobbies = student.hobbies.filter((hobby) => hobby === "coding");
  const hasHobby = coddingHobbies.length > 0;
  return hasHobby;
});

console.log(studentsWithCodingHobby);
