# REST API com MySQL, Typescript, Node JS e Express

Vamos aprender a criar uma REST API com Typescript, MySQL, Node JS e Express. 

- Criar uma pasta para o projeto

```
mkdir nome-do-projeto
```

- Digitar o seguinte comando para iniciar o `npm`:

```
npm init -y
```

- Instalar as seguintes dependências:

```
npm install express dotenv mysql typescript nodemon @types/express @types/dotenv @types/mysql @types/node ts-node @types/nodemon
```

- Com as dependências instaladas, vamos criar um arquivo para concentrar o servidor:

```
touch server.ts
```

- Fazer as seguintes modificações no arquivo `package.json`

```
"scripts": {
	"start": "node dist/server.js",
	"build": "tsc",
	"dev": "nodemon server.ts"
},
```

- Digitar o comando para criar o arquivo `tsconfig.json` e fazer as seguintes alterações:

```
npx tsc --init
```

```
{

	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"outDir": "dist",
		"strict": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
	}

}
```

- Fazer uma configuração inicial no arquivo `server.ts`

```typescript
import  express, { Request, Response } from  'express';
const  app  =  express();
const  port  =  process.env.PORT  ||  5000;

app.get('/members', (request: Request, response: Response) => {
response.send("Hey!!!!!")
})

app.get('/members/:id', (request: Request, response: Response) => {
const  id  =  request.params.id;
response.send("Hey!!! "  +  id)
})

app.listen(port, () =>  console.log(`Está funcionando na porta ${port}!! Uhu!!!`))
```

Configuração inicial feita, vamos fazer o **deploy** inicial da api. Mas antes, vamos colocar o código no nosso repositório.

```
git add .
git commit -m "Alguma coisa"
git push
```

Vamos fazer o **deploy** inicial no Heroku.

- Acessar o Heroku (https://heroku.com)

- Fazer o login (ou criar uma conta)

- Na página inicial (***dashboard***), clicar em **New**, depois clicar em **Create new app**

- Criar um nome para a api no campo **App name**

- No campo **Choose a region**, manter a opção **United States**

- Clicar em **Create app**

- Na aba **Deploy**, clicar na opção **GitHub**

- No campo **Search for a repository to connect to**, digite o nome do repositório para conectar com a api

- Clicar em **Connect**

Mas antes... :)

- Entrar na aba **Resources** e pesquisar por **ClearDB MySQL** em **Add-ons**

- Para obter as credenciais, clique na aba **Settings** e clique depois em **Reveal Config Vars**. Copie o endereço fornecido e cole-o em um arquivo de texto. A configuração aparece dessa forma:

```
mysql://b54966f5205365:9cbaa662@eu-cdbr-west-01.cleardb.com/heroku_b1791a6475f6a54?reconnect=true
```

- Vamos analisar cada parte desse endereço:

|Nome do Usuário| Localhost | Senha | Base de Dados |
|--------------------- | ---------- | --------- | ---------- |
|b54966f5205365|eu-cdbr-west-01.cleardb.com | 9cbaa662 | heroku_b1791a6475f6a54 |

- Ainda em **Config Vars**, fazer os seguintes ajustes:

|KEY|VALUE|
|---|-----|
|NODE_MODULES_CACHE|false|
|NPM_CONFIG_PRODUCTION|true|
|USE_NPM_INSTALL|true|

- Vamos conectar o ClearDB à nossa base de dados. Vamos usar um programa chamado **arctype** (https://arctype.com/). É possível usar a conta do Google ou criar usuário e senha. Após o registro, vamos entrar no programa. Na tela inicial, clicar no nome que aparece na parte superior esquerda da tela e clicar em **Create new workspace...**

- Vamos configurar a conexão. Escolher **MySQL** na tela inicial e depois colocar todas as informações do nosso endereço nas configurações. Clicar em **Test Connection** e depois em **Save**

- Dentro do espaço criado, clicar no `+` (**Create Tab**)

- Dentro da nossa aba, colocar o seguinte:

```
CREATE TABLE `user` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `job` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
```

- Salvar as informações e clicar em **Run**

- Vamos popular nossa tabela. Vamos colocar os dados iniciais e depois salvá-los:

```
INSERT INTO user VALUES (1, "Ana", "Developer);
```

- Após escolher a nossa ramificação (**branch**), clicar em **Enable Automatic Deploys** e depois em **Deploy Branch**

- Para ver a api criada, clicar em **View**

- Para rodar o aplicativo, digitar o seguinte comando:

```
npm run dev
```

- -   De volta ao arquivo  `server.ts`, vamos fazer a conexão com a base de dados:

```typescript
import  express, { Request, Response } from  'express';
import mysql from 'mysql';
require('dotenv').config();
const  app  =  express();
const  port  =  process.env.PORT  ||  5000;

const connection = mysql2.createConnection({ 
	host: process.env.DATABASE_HOST, 
	user: process.env.DATABASE_USER, 
	password: process.env.DATABASE_PASSWORD, 
	database: process.env.DATABASE_DB 
});

connection.connect(function (err) { 
if (err) throw err; 
console.log("Até que enfim conectou!!!!!"); 
});

app.get('/members', (request: Request, response: Response) => {
response.send("Hey!!!!!")
})

app.get('/members/:id', (request: Request, response: Response) => {
const  id  =  request.params.id;
response.send("Hey!!! "  +  id)
})

app.listen(port, () =>  console.log(`Está funcionando na porta ${port}!! Uhu!!!`))
```

-  Vamos criar um arquivo  `env`  para guardar os dados do nosso banco:

```
DATABASE_HOST=eu-cdbr-west-01.cleardb.com
DATABASE_USER=b54966f5205365
DATABASE_PASSWORD=9cbaa662
DATABASE_DB=heroku_b1791a6475f6a54
```

-  Vamos criar métodos para registrar nomes, obter nomes, obter nomes pelo id, atualizar nomes e eliminar nomes.

```typescript
// Registrar nomes  
function createName(request: Request, response: Response) {
	const params = request.body;
	connection.query('INSERT INTO members SET ?', params, (error, results, fields) => {
	if(error) throw error;
	response.send(JSON.stringify(results))
})
}

// Obter nomes
function findAllNames(request: Request, response: Response) {
	connection.query('SELECT * FROM members', (error, results, fields) => {
		if(error) throw error;
		response.send(JSON.stringify(results))
	})
}

// Obter nome pelo id
function findOneName(request: Request, response: Response) {
	const id = request.params.id;
	connection.query(`SELECT * FROM members WHERE ID = ${id}`, params, (error, results, fields) => {
		if(error) throw error;
		response.send(JSON.stringify(results))
		})
}

// Atualizar um nome
function  updateName(request: Request, response: Response) {
connection.query('UPDATE `members` SET `name` = ?, `group` = ? WHERE ID = '  +  request.params.id,
[request.body.name, request.body.group, request.params.id], (error, results, fields) => {
		if(error) throw  error;
		response.send(JSON.stringify(results));
	})
}

// Eliminar um nome

function  deleteName(request: Request, response: Response) {
console.log(request.body);
connection.query('DELETE FROM `members` WHERE `Id`=?',
[request.body.id], function (error, results) {
		if (error) throw  error;
		response.send('Record has been deleted!');
	});
}
```
-   Vamos criar rotas e chamar esses métodos:

```typescript
// Rota para registrar nomes 
app.post('/names', createName); 
// Rota para obter os nomes 
app.get('/names', findAllNames); 
// Rota para obter nome por id 
app.get('/names/:id', findOneName); 
// Rota para atualizar nomes 
app.put('/names/:id', updateName); 
// Rota para apagar nomes 
app.delete('/names/:id', deleteName);
```