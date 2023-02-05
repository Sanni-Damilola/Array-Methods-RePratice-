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
    start: 2030,
    end: "internity",
  },
  {
    name: "Company 3",
    category: "Retail",
    start: 2010,
    end: 2040,
  },
  {
    name: "Company 4",
    category: "Auto",
    start: 2040,
    end: 2010,
  },
  {
    name: "Company 5",
    category: "Finace",
    start: 2010,
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

const retailCompamie = companies.filter((e) => {
  if (e.category == "Retail") {
    return true;
  }
}); // filter 2
// console.log(retailCompamie);  👇👇
const retailCompamie2 = companies.filter((e) => e.category === "Retail"); // arrow functions
// console.log(retailCompamie2);

const arrowFunction = ages.filter((e) => e >= 20); // arrowFunction
// console.log(arrowFunction); 👇

const getEightesCompany = companies.filter((e) => e.start >= 2020); // filter 👈 👉 companies that start before 2021
// console.log(getEightesCompany);

const companiesThatLast10Years = companies.filter((e) => e.end >= 10);  // ✔😎 filter comapanies that last  10 years
// console.log(companiesThatLast10Years);



let useForLoop: any = []; // empty array
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 30) {
    useForLoop.push(ages[i]);
  } // *
} // Filter without for loop
// console.log(useForLoop);

// sort
// reduce
