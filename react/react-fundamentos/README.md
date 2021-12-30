# React - Fundamentos

Vamos aprender o React desde os conceitos iniciais. A primeira atitude que deve ser tomada é criar o arquivo `package.json` que é vai ser a base para qualquer projeto com NodeJS. Podemos digitar os seguintes comandos:

```
yarn init -y
```

Ou

```
npm init -y
```

O arquivo `package.json` sempre vai conter os dados iniciais de qualquer projeto. A parte principal desse arquivo são as dependências (códigos de terceiros que instalamos no nosso aplicativo) dos nossos projetos.

Quando instalamos qualquer dependência no nosso projeto, vai aparecer uma pasta chamada `node_modules`, que armazena o código de todas as bibliotecas usadas nos nossos aplicativos.

Vamos instalar agora o **React** e o **ReactDOM**

```
yarn add react
```

```
yarn add react-dom
```

### O que é o ReactDOM?!

É o modo que trabalhamos com o React para a web. Permite com que o React se comunique com a árvore de elementos do HTML. 

Vamos criar nossas pastas:

- Pasta `src`: pasta que vai armazenar todos os códigos do aplicativo.
- Pasta `public`: pasta que vai armazenar arquivos públicos que precisam ser acessados por meios externos , principalmente o arquivo `index.html`

Vamos instalar agora o **Babel**, que "traduz" o código criado em outro código que seja lido pelos navagadores mais modernos. O comando é o seguinte:

```
yarn add @babel/core @babel/cli @babel/preset-env -D
```

Vamos criar um arquivo chamado `babel.config.js` e colocar a primeira configuracão:

```javascript
module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```

Vamos ver qual é a funcão de cada biblioteca:

- `@babel/core`: biblioteca principal do **Babel**
- `@babel/preset-env`: biblioteca que identifica o ambiente no qual o aplicativo está sendo executado para converter o código da melhor maneira possível
- `@babel/cli`: permite executar o **Babel** pela linha de comando

Para rodar o **Babel** é só digitar:

```
yarn babel src/index.js --out-file dist/bundle.js 
```

Esse comando converte o arquivo `index.js` criado em outro arquivo que vai ficar armazenado na pasta `dist` (pasta de distribuicão) que também será criada.

E se eu quiser ler um arquivo na estrutura do React? Vamos digitar o comando:

```
yarn add @babel/preset-react -D
```

Vamos usar agora o **Webpack**. Essa biblioteca tem recursos para converter arquivos em formatos que os navegadores possam entender. Vamos digitar o seguinte comando:

```
yarn add webpack webpack-cli webpack-dev-server -D
```

Vamos agora criar um arquivo chamado `webpack.config.js`