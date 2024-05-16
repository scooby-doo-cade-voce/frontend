README - Projeto "Cade Voce?"

Este projeto tem como objetivo desenvolver uma aplicação web que permita que tutores de animais de estimação encontrem seus pets perdidos com mais facilidade. A ideia é que o tutor possa enviar uma foto e/ou descrição do animal perdido e a aplicação retorne informações sobre animais encontrados em abrigos cadastrados.

## Tecnologias utilizadas

- Node.js
- React
- MongoDB

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

## Utilização do Husky

O Husky é uma ferramenta que permite a execução de scripts antes de cada commit, garantindo que o código esteja sempre formatado e sem erros. Para utilizar o Husky neste projeto, basta seguir os seguintes passos:

1. Instale o Husky como dependência de desenvolvimento:

```
npm install husky --save-dev
```

2. Adicione o seguinte trecho de código no arquivo package.json:

```
"husky": {
  "hooks": {
    "pre-commit": "npm run lint && npm run format"
  }
}
```

Dessa forma, antes de cada commit, o Husky irá executar os scripts "lint" e "format", que garantem que o código esteja formatado e sem erros.
