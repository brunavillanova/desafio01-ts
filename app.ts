import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from "./class/SpecialAccount";

const peopleAccount = new PeopleAccount(1, 'Bruna', 100);
console.log('PeopleAccount:', peopleAccount);
peopleAccount.deposit(100);
console.log('PeopleAccount após depósito:', peopleAccount);

const companyAccount = new CompanyAccount('DIO', 110);
companyAccount.getLoan(10);  // Usa o método público getLoan para adicionar ao saldo
console.log('CompanyAccount após empréstimo:', companyAccount);

const specialAccount = new SpecialAccount('Special', 200);
specialAccount.deposit(100);  // Deposita com bônus de 10
console.log('SpecialAccount após depósito:', specialAccount);
