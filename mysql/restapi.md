# REST API com MySQL, Typescript, Node JS e Express

Vamos aprender a criar uma REST API com Typescript, MySQL, Node JS e Express e a colocá-la no Heroku.

- Acesse o Heroku e crie uma conta (se já tiver criado uma conta, entre com o email e a senha cadastrados).

- Na página inicial, clique em **App** e depois clique em **Create new app**.

- No campo **App name**, digite o nome do projeto que deseja criar.

- No campo **Choose a region**, mantenha a opcão **United States**.

- Clique em **Create app**.

- Com o projeto devidamente criado, clique na aba **Resources** e digite **ClearDB MySQL** no campo **Add-ons**. **ClearDB MySQL** é um Daas (***Database as a Service***) responsável pelo gerenciamento das bases de dados MySQL.

- Vai abrir uma janela com o servico escolhido. Em **Plan name**, mantenha a opcão **Ignite - Free** e clique em **Submit Order Form**.

- Clique na aba **Settings**. Na parte de **Config Vars** (as variáveis de configuracão que modificam o comportamento do aplicativo), clique em **Reveal Config Vars**.

- Copie e cole o seguinte valor para um editor de texto:

```
mysql://b05424696707cc:581bcc43@us-cdbr-east-05.cleardb.net/heroku_a29e27a2c827520?reconnect=true
```

- O que temos aqui?

| Usuário | Localhost | Senha | Base de Dados |
| ------- | --------- | ----- | ------------- |
| b05424696707cc | us-cdbr-east-05.cleardb.net | 581bcc43 | heroku_a29e27a2c827520 |

- Baixe e instale o **arctype** (cliente SQL gratuito) para a base de dados.

- Ao entrar no **arctype**, clique em **Continue without Account**.

- Clique em **+ Add Connection**.

- Na janela **Add your database credentials**, clique em **MySQL**.

- Preencha os campos com as credenciais criadas para a base de dados.

- Clique em **Test Connection** e depois clique em **Save**.

- Clique em **+** (**Create Tab**) e depois clique em **New Query**.

- Crie uma tabela com as seguintes informacões:

```sql
CREATE table nameList (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
```

- Clique em **Run** para criar nossa base de dados.

- Insira as informacões a seguir para popular a tabela:

```sql
INSERT INTO nameList (id, name, phone)
VALUES (1, 'Mariana', '(11) 23970-1143'); 
```

- Clique em **Run** para incluir os dados na tabela.

- Crie um repositório no **GitHub** com o mesmo nome do projeto criado no Heroku.

- Faca o clone do repostório para seu computador local.

- Entre na pasta do projeto.

- Digite o seguinte comando para inicializar o **npm**

```
npm init
```

- Ao chegar em **entry point**, digite o nome da pasta e do arquivo que estará nessa pasta

```
entry point: (index.js) server.js
```

- Vamos fazer a instalação das dependências a seguir.

```
npm install express dotenv mysql typescript nodemon body-parser ts-node @types/express @types/dotenv @types/mysql @types/nodemon @types/body-parser
```

- Digite o seguinte comando para criar o arquivo `tsconfig.json`.

```
npx tsc --init
```

- Dentro do arquivo `tsconfig.json`, coloque a seguinte configuração:

```json
{
  "compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

- `dist` será a pasta onde ocorrerá a transposição do arquivo `.ts` para um arquivo `.js` comum.

- Vá para o arquivo `package.json` para fazer a seguinte configuração:

```json
 "scripts": {
    "start": "node dist/server.js",
    "build": "tsc",
    "dev": "nodemon server.ts"
  }
```

- Digite o seguinte comando para rodar o Typescript pela primeira vez:

```
npx tsc
```

- Essa configuração permite a compilação dos arquivos de Javascript para Typescript.

Crie uma pasta chamada `.vscode` e crie um arquivo chamado `settings.json` dentro dessa pasta. Coloque a seguinte configuração:

```json
{
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
   "[typescript]": {
     "editor.formatOnSave": true,
     "editor.formatOnPaste": true,
   }
   "[markdown]": {
     "editor.formatOnSave": true,
     "editor.wordWrap": "on",
     "editor.renderWhitespace": "all",
     "editor.acceptSuggestionOnEnter": "off"
   }
}
```

- Esses comandos permitem a configuração automática do nosso projeto no VS Code. 

- Dentro da pasta do projeto, crie um arquivo chamado `server.ts`. Vamos fazer as seguintes configurações (esse arquivo será o servidor da nossa API).

```typescript

import express, { Request, Response } from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/people', (request: Request, response: Response) => {
    const query = 'SELECT * FROM people';
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.send(JSON.stringify(results));
    })
})

app.get('/people/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    const query = `SELECT * FROM people WHERE id = ${id}`;
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.send(JSON.stringify(results));
    })
})

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}! Uhu!!!!!`));
```

- Agora vamos subir a nossa API para o Heroku. Instale o Heroku CLI

- No terminal (pasta do projeto), digite o seguinte comando:

```
heroku login
```

- Para criar um repositório do projeto no Heroku, digite o seguinte comando:

```
heroku git:remote -a example-app
```

- Para subir a API para o Heroku, digite o seguinte comando:

```
git push heroku main
```