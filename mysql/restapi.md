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
entry point: (index.js) source/server.ts
// source: pasta que vai aramazenar nosso arquivo
// server.ts: nome do nosso arquivo porque vamos usar o Typescript
```

- Vamos fazer a instalação das dependências a seguir.

```
npm install --save-dev express dotenv mysql typescript nodemon prettier body-parser ts-node @types/express @types/dotenv @types/mysql @types/nodemon @types/body-parser
```

- Digite o seguinte comando para criar o arquivo `tsconfig.json`.

```
npx tsc --init
```

- Dentro do arquivo `tsconfig.json`, coloque a seguinte configuração:

```json
{
	"compilerOptions": {
		"target": "es5",
        "module": "commonjs",
		"outDir": "./build",
		"strict": true,
		"esModuleInterop": true,
		"experimentalDecorators": true
	}
}
```

- `build` será a pasta onde ocorrerá a transposição do arquivo `.ts` para um arquivo `.js` comum.

- Vá para o arquivo `package.json` para fazer a seguinte configuração:

```json
 "scripts": {
    "start": "node source/server.ts",
    "build": "rm -rf build/ && prettier --write source/ && tsc",
    "dev": "nodemon"
  }
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

- Crie uma pasta chamada `source` e, dentro dessa pasta, crie uma nova pasta chamada `config`. Dentro da pasta `config`, crie um arquivo chamado `logging.ts`. Já nesse arquivo, crie a primeira função:

```typescript
const getTimeStamp = (): string => {
 return new Date().toISOString();
}

// Retorna a data atual em um formato legível
```

- Crie mais uma funcão:

```typescript
const info = (namespace: string, message: string, object?: any) => {
  // Verificar se um objeto está sendo passado
  if(object) {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object)
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`)
  }
}
```

- Crie mais três funções iguais à função anterior.

```typescript
const warn = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object)
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`)
  }
}

const error = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object)
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`)
  }
}

const debug = (namespace: string, message: string, object?: any) => {
  if(object) {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object)
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`)
  }
}
```

- Com todas as funções criadas, vamos exportá-las

```typescript
export default { info, warn, error, debug }
```

- O arquivo completo fica assim:

```typescript
const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

const getTimeStamp = (): string => {
    return new Date().toISOString();
};

export default {
    info,
    warn,
    error,
    debug
};
```

- Ainda dentro da pasta `config`, crie um arquivo chamado `config.ts`. Vamos incluir as seguintes configurações:

```typescript
import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337

// Verifica se process.env.SERVER_PORT existe. Caso contrário, acessa a porta 1337

const SERVER = {
   hostname: SERVER_HOSTNAME,
   port: SERVER_PORT
}

const config = {
   server: SERVER
}

export default config;
```

- Dentro da pasta `source`, crie um arquivo chamado `server.ts`. Vamos fazer as seguintes configurações (esse arquivo será o servidor da nossa API).

```typescript
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';

const NAMESPACE = 'Server';
const router = express();

// Log da requisição
// Middleware: função que permite a modificação de requisições
router.use((req, res, next) => {
    /** Log da requisicão */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log da resposta */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

/** Parse do corpo da requisicão */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Regras da API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

router.get('/names', (req, res, next) => {
    res.send("Hey!!!!!")
});

router.get('/names/:id', (req, res, next) => {
	const id = req.params.id;
	res.send(`Hey ${id}!`)
})

/** Tratamento de erros */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
```

