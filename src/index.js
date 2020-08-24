import { createStore } from  "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0 ) => {
  return count;
} // reducer ? 1. modify your date 2. whatever it returns  that becomes the data on your application. 

const countStore = createStore(reducer); // store ? put your data
console.log(countStore.getState());


