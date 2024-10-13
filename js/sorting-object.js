const user = {
  name: "Mykola",
  hobby: "sport",
  premium: true,
};
const mood = (user) => {
  user.mood = "happy";
  return user;
};
const hobby = (user) => {
  user.hobby = "skydiving";
  return user;
};
const premium = (user) => {
  user.premium = false;
  return user;
};
const showAllKeys = (user) => {
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
  return user;
};

console.log(mood(user));
console.log(hobby(user));
console.log(premium(user));
console.log(showAllKeys(user));

const man = {
  number: 46,
  age: 52,
  manName: "Alex",
  wieght: "1.85m",
};
const countElemens = (obj) => {
  const keys = Object.keys(obj);
  return keys.length;
};
console.log(countElemens(man));

const employees = {
  Egor: 16,
  Andriy: 31,
  Alex: 25,
  Mykola: 35,
  Jan: 28,
};

const findBestEmployee = (employees) => {
  const names = Object.keys(employees);
  let bestWork = 0;
  let bestEmployee;
  for (const employee of names) {
    if (bestWork < employees[employee]) {
      bestWork = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};
console.log(findBestEmployee(employees));

const salaryOfEmployees = {
  Tristan: 4000,
  Maxi: 5500,
  Noah: 5500,
  Leni: 8000,
  Lara: 7000,
};
const countTotalSalary = (employees) => {
  const saleries = Object.values(employees);
  let sumSal = 0;
  for (const salery of saleries) {
    sumSal += salery;
  }
  return sumSal;
};
console.log(countTotalSalary(salaryOfEmployees));

const users = [
  {
    name: "Jan",
    age: 13,
  },
  {
    name: "Gerome",
    age: 12,
  },
  {
    name: "Lucas",
    age: 12,
  },
  {
    name: "Yves",
    age: 13,
  },
];
const getAllPropValues = (arr, prop) => {
  const namesOfUsers = [];
  for (const element of arr) {
    namesOfUsers.push(element[prop]);
  }
  return namesOfUsers;
};
console.log(getAllPropValues(users, "name"));

const products = [
  {
    name: "cheese",
    price: 5,
    quantity: 1,
  },
  {
    name: "taco",
    price: 10,
    quantity: 3,
  },
  {
    name: "cookies",
    price: 5,
    quantity: 20,
  },
  {
    name: "steak",
    price: 20,
    quantity: 3,
  },
  {
    name: "dragon-fruit",
    price: 15,
    quantity: 5,
  },
  {
    name: "cucumber",
    price: 100,
    quantity: 50,
  },
  {
    name: "kiwi",
    price: 5,
    quantity: 10,
  },
];
const calculateTotalPrice = (prodcuts, productN) => {
  let totalPrice = 0;
  for (const product of prodcuts) {
    if (product === productN) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
};
console.log(calculateTotalPrice(products, "cucumber"));