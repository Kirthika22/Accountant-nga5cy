// Import stylesheets
import './style.css';

import { Accountant } from './Accountant';
let obj = new Accountant('nila', 'accounts');
console.log(obj);
obj.collectMoney();

let info = new Accountant('kiru', 'accounts');
console.log(info);
info.askForInformation();

let bill = new Accountant('manju', 'accounts');
console.log(bill);
bill.giveUsBill();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
