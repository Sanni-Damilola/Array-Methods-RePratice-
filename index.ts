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

// for loop
for (let i = 0; i < companies.length; i++) {
  // console.log(companies[i]);
}

// forEach
companies.forEach(function (e) {
  // console.log(e.name);
});


// global 
let ages = [12, 45, 89 ,20 ,10]

// FIlter
const filter = 


// without for loop
let useForLoop: any = [];
for (let i = 0; i < companies.length; i++) {
  if (companies[i].end < 30) {
    useForLoop.push(companies[i]);
    console.log(useForLoop);
  } // *
}

// sort
// reduce
