import { Invoice } from './classes/Invoice.js';
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});
let InvOne = new Invoice('Shyam', 'buliding a Website', 25000);
let InvTwo = new Invoice('Manoj', 'buliding an App', 55000);
let Invoices = [];
Invoices.push(InvOne);
Invoices.push(InvTwo);
// console.log(Invoices);
Invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
