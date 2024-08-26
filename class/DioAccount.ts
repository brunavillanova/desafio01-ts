export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getName(): string {
    return this.name;
  }

  public deposit(amount: number): void {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Você depositou R$${amount}. Novo saldo: R$${this.balance}.`);
    } else if (amount <= 0) {
      console.log('O valor do depósito deve ser maior que zero.');
    }
  }

  public withdraw(amount: number): void {
    if (this.validateStatus()) {
      if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log(`Você sacou R$${amount}. Novo saldo: R$${this.balance}.`);
      } else if (amount <= 0) {
        console.log('O valor do saque deve ser maior que zero.');
      } else {
        console.log('Saldo insuficiente para realizar o saque.');
      }
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  }
}
