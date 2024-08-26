import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public getLoan(amount: number): void {
    if (this.validateStatus()) {
      this.deposit(amount);
      console.log(`Você pegou um empréstimo de R$${amount}. Novo saldo: R$${this.getBalance()}.`);
    }
  }
}
