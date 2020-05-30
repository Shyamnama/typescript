import { Invoice } from './classes/Invoice.js';

// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.value);
});

let InvOne = new Invoice('Shyam', 'buliding a Website', 25000);
let InvTwo = new Invoice('Manoj', 'buliding an App', 55000);

let Invoices: Invoice[] = [];

Invoices.push(InvOne);
Invoices.push(InvTwo);

// console.log(Invoices);

Invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
