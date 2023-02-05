const companies = [
  {
    name: "EDHF",
    category: "Charity",
    start: 2020,
    end: "Forever",
  },
  {
    name: "codeLab",
    category: "Technology",
    start: 2030,
    end: "Forever",
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
  {
    name: "DA MI HELP",
    category: "Finace",
    start: 2010,
    end: "Forever",
  },
  {
    name: "Sylvia",
    category: "Tech",
    start: 2025,
    end: "Forever",
  },
  {
    name: "Sunday",
    category: "Business",
    start: 2015,
    end: "Forever",
  },
];

//  ??
const assignment = (value: string) => {
  for (let i = 0; i < companies.length; i++) {
    if (companies[i].name === value) {
      console.log(value);
      break;
    } else {
      console.log("Not Found");
      break;
    }
  } // for loop
}; // using the for Loop to Perform Filter Method

assignment("Sunday");

companies.forEach(function (e) {
  // console.log(e.name);
});

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

const companiesThatLast10Years = companies.filter((e) => e.end >= 10); // ✔😎 filter comapanies that last  10 years
// console.log(companiesThatLast10Years);

let useForLoop: any = []; // empty array
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 30) {
    useForLoop.push(ages[i]);
  } // *
} // Filter without for loop
// console.log(useForLoop);

// map
// create array of company names
const companyNames1 = companies.map((e) => {
  return e.name;
}); // map companies names
// console.log(companyNames1);

const companyNames2 = companies.map((e) => {
  return `${e.name} [${e.start} - ${e.end}]`;
}); // map companies and concat it with their start and end
// console.log(companyNames2);

// sort
const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortCompanies); // start years

// sort ages
const sortAges1 = ages.sort();
// console.log(sortAges1);

const sortAges2 = ages.sort((a, b) => a - b); // acending order
// console.log(sortAges2);
const sortAges3 = ages.sort((a, b) => a - b); // decending order
// console.log(sortAges3);

// reduce
// 👇
// using for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
// console.log(ageSum);

const ageAdd = ages.reduce((total, ages) => total + ages); // get total
// console.log(ageAdd);

// combine Methods
const combined = ages
  .map((e) => e * 5)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0); // cool
// console.log(combined);

// Thank YOU ❤🤡🦾🙋‍♂️😘🚴‍♂️🚴‍♀️🔚✔
