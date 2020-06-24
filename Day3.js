// 1.Add a new property to an Object using defineProperty
// function shape() {
//   num = 1;
// }

// Object.defineProperty(shape, "circle", {
//   value: 2,
//   writable: false,
// });
// console.log(typeof shape);
// console.log(typeof shape.circle);
// console.log(shape.circle);

function Student() {
  this.name = "Steven";
  this.gender = "Male";
}

var student1 = new Student();
Object.defineProperty(student1, "name", {
  value: "Grace",
  writable: false,
});
console.log(student1.name);
const ageObj = {};
Object.defineProperties(ageObj, {
  name: {
    value: "Grace",
    writable: true,
  },
});
console.log(ageObj.name);

// 2. Find the oldest Guy using reduce
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

var maxAge = pilots.reduce(function (x, y) {
  return x.years > y.years ? x : y;
});

console.log(maxAge);
