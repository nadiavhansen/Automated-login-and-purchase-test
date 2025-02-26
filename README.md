# Testes automatizados no Swag Labs

Este projeto traz um teste E2E de login e a realização de uma compra na plataforma Swag Labs utilizando Cypress.

## Installation

Para a instalação do Cypress, você precisa ter instalado o node no seu computador. [pip](https://pip.pypa.io/en/stable/) 

```bash
node -v
npm -v
```

Instalando o Cypress

```bash
npm init -y
npm install cypress --save-dev
```

Verificando se a instalação foi realizada com sucesso

```bash
node -v
npm -v
npx cypress --version
```

## Rodando os testes

Após verificar se tudo foi instalado com sucesso, você deve salvar o repositório no seu computador e abrir o projeto no VS Code (ou no editor de código da sua preferência) e rodar o comando:

```bash
npx cypress run
```
Os testes serão executados e mostrados no seu terminal, todos os testes devem passar com sucesso.

Se você deseja executar o teste no Cypress, você irá digitar no terminal

```bash
npx cypress open
```

Com isso, o Cypress deve abrir automaticamente. Você irá clicar em:
- E2E Testing
- Selecionar Electron
- Start E2E Testing in Electron

Após a inicialização do Electron, selecionar o arquivo que deseja testar:
- login.spec
- purchase.spec

Os testes devem rodar automaticamente.
