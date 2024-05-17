README - Projeto "Cade Voce?"

Este projeto tem como objetivo desenvolver uma aplicação web que permita que tutores de animais de estimação encontrem seus pets perdidos com mais facilidade. A ideia é que o tutor possa enviar uma foto e/ou descrição do animal perdido e a aplicação retorne informações sobre animais encontrados em abrigos cadastrados.

## Tecnologias utilizadas

- Node.js
- React

## Como rodar o projeto

Para rodar o projeto, é necessário ter o Node.js e o MongoDB instalados na máquina.

1. Clone o repositório em sua máquina:

```
git clone https://github.com/scooby-doo-cade-voce/frontend.git
```

2. Acesse a pasta do projeto:

```
cd cade-voce
```

3. Instale as dependências do projeto:

```
npm install
```

4. Inicie o servidor:

```
npm start
```

5. Acesse a aplicação em seu navegador, através do endereço:

```
http://localhost:3000
```

## Instalação e configuração do Husky e Commitzen

### **Passo 1: Inicialize um Projeto Node.js**

Se ainda não tiver um projeto Node.js, inicialize um novo projeto:

```bash
npm init -y
```

### **Passo 2: Instale o Husky**

O Husky permite que você adicione hooks de Git facilmente. Primeiro, instale o Husky como uma dependência de desenvolvimento:

```jsx
npm install husky --save-dev
```

### **Passo 3: Configure o Husky**

Adicione um script de configuração para o Husky no seu **`package.json`**:

```json
"scripts": {
  "prepare": "husky install"
}
```

Execute o script para instalar os hooks do Husky:

```bash
npm run prepare
```

### **Passo 4: Adicione Hooks do Husky**

Agora você pode adicionar hooks do Git usando Husky. Por exemplo, para adicionar um hook **`pre-commit`** que roda testes antes de cada commit:

```bash
npx husky add .husky/pre-commit "npm test"
```

Isso cria um arquivo **`.husky/pre-commit`** que contém o comando **`npm test`**.

### **Passo 5: Instale o Commitizen**

O Commitizen ajuda a escrever mensagens de commit de maneira padronizada. Primeiro, instale o Commitizen como uma dependência de desenvolvimento:

```bash
npm install commitizen --save-dev
```

### **Passo 6: Configure o Adaptador do Commitizen**

Você precisa escolher e configurar um adaptador para o Commitizen. Vamos usar o adaptador **`cz-conventional-changelog`**, que segue as convenções do Conventional Changelog:

```bash
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### **Passo 7: Adicione um Script para Commitizen**

Adicione um script para facilitar o uso do Commitizen no seu **`package.json`**:

```json
"scripts": {
  "prepare": "husky install",
  "commit": "cz"
}
```

### **Passo 8: Configurar Hook de Commit com Husky**

Para garantir que todos os commits sigam o formato correto, você pode adicionar um hook **`commit-msg`** com o Husky:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### **Passo 9: Instale e Configure o Commitlint**

O Commitlint ajuda a garantir que as mensagens de commit sigam um padrão especificado. Primeiro, instale o Commitlint e uma configuração padrão:

```bash
npm install @commitlint/config-conventional @commitlint/cli --save-dev
```

Crie um arquivo **`commitlint.config.js`** na raiz do seu projeto com o seguinte conteúdo:

```jsx
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

### Passo 10: Fazer um Commit Usando Commitizen**

Agora você pode fazer um commit usando o Commitizen:

```bash
npm run commit
```

Parabéns, você configurou o Husky para adicionar hooks do Git, o Commitizen para padronizar mensagens de commit, e o Commitlint para garantir a conformidade das mensagens de commit