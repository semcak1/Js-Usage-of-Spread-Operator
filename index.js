// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let obj1 = [
  { name: "semih", surname: "Cakmak", id: "1" },
  { name: "seda", surname: "Cakmak", id: "2" },
  { name: "süedah", surname: "Cakmak", id: "3" }
];
let obj2 = { name: "sm", surname: "cak", id: "2" };
// obj1 = {...obj1,name:'sm',surname:'cak',id:'2'}
console.log("listeye yeni obje eklemek : ", [...obj1, obj2]);
console.log(
  "bir objenin değerlerini değiştmrimek",
  "önceki:",
  obj1[0],
  "sonraki:",
  { ...obj1[0], name: "s", surname: "c", id: "0" }
);
