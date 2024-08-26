import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public deposit(amount: number): void {
    const bonusAmount = 10;
    super.deposit(amount + bonusAmount); // Adiciona 10 ao valor depositado
  }
}
