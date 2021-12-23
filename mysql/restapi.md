## MySQL - Criar uma API com MySQL, Express, TypeScript e NodeJS

- Criar uma pasta chamada `nome-do-projeto-api`

- Abrir essa pasta

- Digite o seguinte comando: 

```
npm init -y
```

- Criar o seguinte arquivo: 

```
touch app.ts
```

- Criar uma pasta chamada `src` e colocar esse arquivo `app.ts` nessa pasta

- Instalar as primeiras dependências:

```
npm install –save-dev typescript ts-node nodemon
// nodemon para atualizar o servidor automaticamente
```


- Fazer as seguintes modificações no arquivo package.json:

```
“scripts”: {
	“dev”: “nodemon src/app.ts”,
	“ts:build”: “rm -rf ./dist && tsc”,  // fazer a compilação automática de ts para js
	“prestart”: “npm run ts:build”,
	“start”: “node dist/app.js”
}
```
- Criar um arquivo chamado tsconfig.json (fora da pasta src) com as configurações a seguir:

```
{
“compilerOptions”: {
“outDir”: “./dist”,
“rootDir”: “./src”,
“moduleResolution”: “node”,
“target”: “es5”,
“allowJs”: true,
“strict”: true,
“noImplicitAny”: true,
“allowSyntheticDefaultImports”: true,
“sourceMap”: true,
“declaration”: true,
“declarationMap”: true,
“resolveJsonModule”: true,
“esModuleInterop”: true
},
“include”: [
“./src/**/*”
],
“exclude”: [
“node_modules”,
“**/*.spec.ts”
],
}
```

- Para fazer a compilação: `npm run ts:build`

- Para rodar o projeto em geral: `npm run start`

- Para rodar o servidor: `npm run dev`

- Instalar as dependências a seguir:

```
npm install express axios cheerio dotenv mysql
```

- Instalar mais essas dependências:

```
npm install –save-dev @types/express @types/node @types/mysql
```

- Começando a trabalhar dentro do arquivo `app.ts`:


```typescript
import express, { Request, Response } from ‘express’;
import mysql from ‘mysql’;
const app = express();
const port = process.env.PORT || 3000;

// Rotas
app.get(‘/characters’, (request: Request, response: Response) => {
	response.send(“It works”)
})

app.get(‘/characters/:id’, (request: Request, response: Response) => {
	const id = request.params.id
	response.send(“It works for id ” + id)
})

// Rodar o servidor
app.listen(port, () => {
	console.log(“The app is running”)
}
```

- Fazer o download da CLI do PlanetScale ([app.planetscale.com/cli](http://app.planetscale.com/cli))

- Digitar o seguinte comando: `pscale database create nome-da-base-de-dados`

- Dentro da CLI do PlanetScale ([app.planetscale.com/cli](http://app.planetscale.com/cli)),  entrar na base criada (dentro do Dashboard)

- Dentro da base criada, clicar em `Branches`

- Dentro de `Branches`, clicar em `main`

- Dentro de `main`, clicar em `Promote a branch to production`

- Para criar uma nova ramificação, dentro da aba `Branches`, clicar em `New branch`

- Dar um nome para a ramificação e clicar em `Create branch`

- Dentro da ramificação criada, clicar em `Console`

- Dentro da aba `Console`, colocar as informações a seguir:

```
CREATE TABLE `Characters` (
`id` INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(255) NOT NULL,
`species` VARCHAR(255) NOT NULL,
`image` VARCHAR(255) NOT NULL
);
```
- Entrar na aba `Schema`

- Dentro da aba `Schema`, clicar em `Refresh schema`

- Voltando à aba `Console`, inserir o seguinte:

```
INSERT INTO Characters (name, species, image)
VALUES (“wqwqwqw”, “sasasasas”, “adsaasdasda”);
```

- Digitar o seguinte comando: `SELECT * FROM Characters;`

- De volta ao arquivo `app.ts`, fazer o seguinte:

```typescript
app.get(‘/characters’, (request: Request, response: Response) => {
const query = “SELECT * FROM Characters”;
response.send(“It works”)
})
```

- Fazer a conexão com a base de dados:

```typescript
const connectionString = process.env.DATABASE_URL || “”;
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get(‘/characters’, (request: Request, response: Response) => {
	const query = “SELECT * FROM Characters”;
		connection.query(query, (error, rows) => {
		if(error) throw error;
		const returnValue = {
		data: rows,
		message: rows.length === 0 ? “No Record Found” : null
		}
		return response.send(returnValue);
	})
})
```

- Criar um arquivo `.env` e colocar o seguinte: `DATABASE_URL = “”

- Digitar o seguinte comando no terminal:

```
pscale connect nome-da-base-de-dados dev –execute ‘npm run dev’
```

- Fazer a modificação a seguir na segunda rota:

```typescript
app.get(‘/characters/:id’, (request: Request, response: Response) => {
		const id = request.params.id
		const query = `SELECT * FROM Characters WHERE ID = ${id} LIMIT 1`;
		connection.query(query, (error, rows) => {
			if(error) throw error;
			const returnValue = {
				data: rows.length > 0 ? rows[0] : null,
				message: rows.length === 0 ? “No Record Found” : null
			}
		return response.send(returnValue);
	})
})
