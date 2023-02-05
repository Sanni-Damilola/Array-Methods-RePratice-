const companies = [
  {
    name: "EDHF",
    category: "Charity",
    start: 2020,
    end: "internity",
  },
  {
    name: "codeLab",
    category: "Technolofy",
    start: 2020,
    end: "internity",
  },
  {
    name: "Company 3",
    category: "Retail",
    start: 2020,
    end: 2040,
  },
  {
    name: "Company 4",
    category: "Auto",
    start: 2020,
    end: 2010,
  },
  {
    name: "Company 5",
    category: "Finace",
    start: 2020,
    end: 2090,
  },
];

for (let i = 0; i < companies.length; i++) {
  // console.log(companies[i]);
} // for loop

companies.forEach(function (e) {
  // console.log(e.name);
}); //

let ages = [12, 45, 89, 20, 10]; // global

const filter = ages.filter((e) => {
  if (e >= 20) {
    return true;
  }
}); // FIlter
// console.log(filter);

const arrowFunction = ages.filter((e) => e >= 20); // arrowFunction
// console.log(arrowFunction);

let useForLoop: any = []; // empty array
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 30) {
    useForLoop.push(ages[i]);
  } // *
} // Filter without for loop
// console.log(useForLoop);

// sort
// reduce
