const companies1 = [
  {
    name: "EDHF",
    category: "Charity",
    start: 2020,
    end: 3030,
    income_per_month: 89900,
  },
  {
    name: "codeLab",
    category: "Technology",
    start: 2010,
    end: 3000,
    income_per_month: 20001,
  },
  {
    name: "Company 3",
    category: "Retail",
    start: 2010,
    end: 2040,
    income_per_month: 50333,
  },
  {
    name: "Company 4",
    category: "Auto",
    start: 2010,
    end: 2040,
    income_per_month: 10333,
  },
  {
    name: "Company 5",
    category: "Finace",
    start: 2010,
    end: 2090,
    income_per_month: 3000,
  },
  {
    name: "DA MI HELP",
    category: "Finace",
    start: 2010,
    end: 4040,
    income_per_month: 35000,
  },

  {
    name: "Sunday",
    category: "Business",
    start: 2015,
    end: 8080,
    income_per_month: 18930,
  },
];

// age
let age = companies1.forEach((e) => {
  //   console.log(`Name: ${e.name} : ${2023 - e.start}`);
});

// income
let income = companies1.map((e) => {
  return e.income_per_month;
  //   console.log(`Name: ${e.name} Income: ${e.income_per_month}`);
});

// total income
const total_income = income.reduce((a, b) => a + b);
console.log(total_income);
