// Variable: var, let, const
// const name = "hari";
// console.log(name);

// let address = "itahari";
// address = "dharan";
// address = "ktm";

// console.log(address);

// const age = 20;

// Conditional statement
// if (age > 18) {
//   console.log("you are an adult");
// } else if (age < 18 && age >= 13) {
//   console.log("you are teenager");
// } else {
//   console.log("you are child");
// }

// Loop
for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

// functions
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Hari");
greet("Shyam");
greet("Ram");

// arrow function
const sayGoodbye = (name) => {
  console.log(`Bye ${name}`);
};

// anonymous arrow function
() => {};

sayGoodbye("Hari");
sayGoodbye("Shyam");
sayGoodbye("Ram");

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

console.log(sum(20, 20));

// Destructuring
// Array destructuring
const data = ["ram", "shyam", "hari"];

console.log(data[1]);

// const name1 = data[0];
// const name2 = data[1];
// const name3 = data[2];

const [name1, name2, name3] = data;

// Object destructuring
const user = {
  age: 20,
  name: "John",
  address: "Dharan",
};

console.log(user["address"]);
console.log(user.age);

// const name = user.name;
// const age = user.age;
// const address = user.address;

const { name: myName, address, age } = user;
console.log(myName);

// Template literals
const result = "Hello my name is " + myName + " and i am " + age + " years old";
console.log(result);

const tResult = `Hello my name is ${myName} and I am ${age} years old`;
console.log(tResult);

// Spread operator
const list1 = [345, 643, 56, 412, 3412, 35, 345, 6, 234];
const list2 = [456, 5476, 587, 45, 234, 24, 256, 5];

const list = [...list1, ...list2];
console.log(list);

const objData1 = {
  name: "Rose",
  age: 50,
};

const objData2 = {
  address: "KTM",
  phone: 846541,
};

const objData = { ...objData1, ...objData2 };

console.log(objData);

// Array methods
const myList = [35, 456, 47, 5678, 4, 2, 5, 67, 33, 8, 8454, 63, 83, 3];
console.log(myList);

for (let i = 0; i < myList.length; i++) {
  //   console.log(myList[i] + 5);
}

// Map : [A,A,A] => map(B) => [B,B,B]
const listResult = myList.map((item) => item + 5);
console.log(listResult);

// filter : [A,B,A]=> filter(A) => [A,A]
const filteredList = myList.filter((item) => item % 2 == 0);
console.log(filteredList);

// const result = age > 20 ? "you are adult" : "you are child";

// sort, find, every, some, fill, includes

const title = document.getElementById("title");

title.textContent = "My Title";

title.style.color = "red";

title.style.background = "#f66f6f";

console.log(title);

const listElement = document.getElementById("list");

for (let i = 0; i < myList.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = myList[i];

  listElement.appendChild(listItem);
}
