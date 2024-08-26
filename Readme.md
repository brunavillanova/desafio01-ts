Documentação do Projeto
Visão Geral

Este projeto é um sistema de contas bancárias implementado em TypeScript. O sistema inclui várias classes que representam diferentes tipos de contas e operações bancárias básicas, como depósitos, saques e empréstimos.
Classes e Métodos
1. DioAccount

A classe base DioAccount representa uma conta bancária genérica. Contém métodos para gerenciar saldo e status da conta.
Propriedades

    private name: string: Nome do titular da conta.
    private readonly accountNumber: number: Número da conta, não pode ser alterado.
    protected balance: number: Saldo da conta.
    private status: boolean: Status da conta (ativa ou inativa).

Métodos

    constructor(name: string, accountNumber: number): Inicializa uma nova instância com nome e número da conta.
    public getName(): string: Retorna o nome do titular da conta.
    public deposit(amount: number): void: Adiciona um valor ao saldo, se a conta estiver ativa e o valor for positivo.
    public withdraw(amount: number): void: Subtrai um valor do saldo, se a conta estiver ativa, o valor for positivo e o saldo for suficiente.
    public getBalance(): number: Retorna o saldo atual da conta.
    protected validateStatus(): boolean: Valida se a conta está ativa.

2. PeopleAccount

A classe PeopleAccount é uma extensão de DioAccount para contas pessoais.
Propriedades

    doc_id: number: Identificador do documento do titular.

Métodos

    constructor(doc_id: number, name: string, accountNumber: number): Inicializa uma nova instância com identificador do documento, nome e número da conta.

3. CompanyAccount

A classe CompanyAccount é uma extensão de DioAccount para contas de empresas. Adiciona funcionalidade para empréstimos.
Métodos

    constructor(name: string, accountNumber: number): Inicializa uma nova instância com nome e número da conta.
    public getLoan(amount: number): void: Adiciona um valor ao saldo como um empréstimo, se a conta estiver ativa.

4. SpecialAccount

A classe SpecialAccount é uma extensão de DioAccount para contas especiais. Adiciona um bônus ao depósito.
Métodos

    constructor(name: string, accountNumber: number): Inicializa uma nova instância com nome e número da conta.
    public deposit(amount: number): void: Adiciona um valor ao saldo com um bônus adicional de 10.

Exemplo de Uso

O arquivo app.ts mostra como criar instâncias das contas e usar os métodos disponíveis:

typescript

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

Considerações

    Encapsulamento: Todos os atributos são privados para garantir encapsulamento e integridade dos dados.
    Imutabilidade: O número da conta não pode ser alterado após a criação.
    Extensibilidade: As classes podem ser estendidas para adicionar novas funcionalidades conforme necessário.

Execução

Para executar o projeto, use o seguinte comando:



npm run dev

Certifique-se de que o TypeScript e o ts-node-dev estão instalados.


Conclusão:

Esta documentação oferece uma visão geral completa das classes e métodos do projeto, além de exemplos de uso e instruções para execução. Se houver mais funcionalidades ou mudanças, a documentação deve ser atualizada para refletir as novas adições.
