## MySQL - Uso no Terminal

Comando para mostrar as bases de dados criadas

```
SHOW databases;
```

Comando para criar uma base de dados

```
CREATE DATABASE nome-da-base-de-dados;
```

Como sei que a base de dados foi criada com sucesso? É só digitar novamente o comando 

```
SHOW databases;
```

Comando para utilizar uma base de dados

```
USE nome-da-base-de-dados;
```

Dentro da base de dados, digitar o seguinte comando para mostrar as tabelas criadas

```
SHOW tables;
```

Comando para criar as tabelas dentro da base de dados

```
CREATE table nome-da-tabela (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(250),
);
```

Para ver a tabela criada, é só digitar o comando

```
SHOW tables;
```

Para criar uma tabela que vai usar a chave estrangeira da tabela principal é só digitar o seguinte comando

```
CREATE table nome-da-tabela-secundaria (
	id INT not null auto_increment,
	nome VARCHAR(250) not null,
	categoria INT not null,
	CPF VARCHAR(250) not null,
	data DATE not null,
	codDepto INT not null,
	CONSTRAINT FOREIGN KEY fk1 (codDepto) references nome-da-tabela (id),
	PRIMARY KEY (id)
);
```

**OBS:** O formato de data aceito pelo SQL é o seguinte: aaaa-mm-dd (ano-mês-dia, separado por traços)

Para mostrar as colunas da tabela é só digitar o comando

```
SHOW COLUMNS FROM nome-da-tabela;
```

Para excluir uma tabela é só digitar o comando

```
DROP table nome-da-tabela;
```

Para excluir uma base de dados (cuidado com isso!) é só digitar o comando

```
DROP database nome-da-base-de-dados;
```

Comando para adicionar uma coluna a uma tabela existente

```
ALTER TABLE nome-da-tabela ADD COLUMN nome-da-nova-coluna VARCHAR(100);
```

Comando para selecionar todos os dados de uma tabela

```
SELECT * FROM nome-da-tabela;
```

Comando para selecionar um dado específico de uma tabela

```
SELECT nome FROM nome-da-tabela;
```

Comando para inserir dados em uma tabela existente

```
INSERT INTO nome-da-tabela (nome) VALUES (“Aninha”);
```

Comando para buscar um dado muito específico em uma tabela

```
SELECT * FROM nome-da-tabela WHERE nome = “Aninha”;
```

Comando para atualizar uma tabela

```
SET SQL_SAFE_UPDATES = 0

UPDATE nome-da-tabela SET idade = 15 WHERE nome = “Aninha”;
```

Comando para eliminar um dado de uma tabela

```
DELETE FROM nome-da-tabela WHERE nome = “Jennie”;
```

Comando para sair do MySQL

```
\q
```