# MySQL - Instalação

- Acessar a página oficial do MySQL: [www.mysql.com](http://www.mysql.com)

- Clicar em **Downloads**

- Dentro da página de Downloads, clicar em **MySQL Community (GPL) Downloads**

- Dentro da página **MySQL Community (GPL) Downloads,** clicar em **MySQL Community Server**

- Ao baixar o **MySQL Community Server,** escolher o sistema operacional (macOS) e a versão (macOS 11 (x86, 64-bit))

- Baixar o programa. Em uma próxima página, vai pedir para entrar ou criar uma conta na Oracle. Clicar em **No thanks, just start my download**

- Clicar no pacote de instalação. Ao chegar em **Configuration**, haverá duas opções: **Use Strong Password Encryption** e **Use Legacy Password Encryption**. Usar a primeira opção (**Use Strong Password Encryption**)

- Criar uma senha que contenha pelo menos oito caracteres, com uma mistura de letras, números e outros caracteres

- Esperar pelo fim da instalação

- Quando a instalação estiver concluída, clicar em **Close**

- Clicar em **Preferências do Sistema** (**System Preferences**), clicar no ícone do MySQL e clicar no botão **Start MySQL Server**

- Antes de usar o MySQL no terminar, pesquisar pela pasta **/usr**

- Dentro dessa pasta, clicar em **local**, depois clicar em **mysql-8.0.26-macos11-x86_64** e clicar em **bin**. Com o botão direito, clicar em **Copy “bin” as Pathname**

- Abrir o terminal e digitar o seguinte comando: 

```
open -t .zsh-profile
```

- Caso não exista, basta cria-lo com o seguinte comando: 

```
touch .zsh-profile
```

- Digitar novamente o comando 

```
open -t .zsh-profile.
```

- Dentro desse arquivo, copiar o seguinte comando: **Export PATH=${PATH}:/usr/local/mysql-8.0.26-macos11-x86_64/bin.** Salvar o arquivo

- Abrir o terminal novamente e digitar o comando 

```
alias mysql=/usr/local/mysql/bin/mysql
```

- Digitar o comando 

```
mysql –u root -p
```

- Digitar a senha configurada na instalação

- Digitar `status` para ver os comandos que podem ser usados no terminal