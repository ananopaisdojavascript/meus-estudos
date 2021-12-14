# Estrutura Básica

- Para criar um novo projeto no Angular, basta digitar o seguinte comando:

```
ng new nome-do-projeto
```

- Ao criar um projeto, aparecem duas perguntas:

1) Se o projeto terá um sistema de roteamento

2) Qual vai ser a folha de estilo padrão do projeto (CSS, Sass, SCSS ou Less)

- Após responder essas perguntas, o Angular faz a instalação dos recursos necessários.

- Para entrar na pasta do aplicativo, basta digitar: `cd nome-do-projeto`

- Para rodar o Angular no modo de desenvolvimento, digite o seguinte comando: 
`ng serve –open` (para abrir o servidor diretamente no navegador) ou apenas `ng serve`

- Com o servidor de desenvolvimento funcionando, podemos editar o código e visualizar as modificações feitas no navegador

- O servidor do Angular sempre se inicia nessa porta: [http://localhost:4200](http://localhost:4200)

- Para gerar o código final para produção, digite o seguinte comando: `ng build`. Esse comando executa todas as ferramentas do Angular para gerar o HTML final para publicação e cria uma pasta chamada `dist` com o código final do aplicativo

- O Angular introduz o conceito de módulos. Cada aplicativo Angular é composto de pelo menos um módulo para existir. Um módulo pode importar outros módulos (ou seja, um módulo depende do outro).

- Cada módulo tem componentes (item mais básico para construir um aplicativo)

- Cada componente contém uma parte da interface gráfica do aplicativo e a lógica que a controla

- O componente é a peça fundamental para construir qualquer aplicativo

- Para criar um novo componente, digite o seguinte comando:

```
ng generate component nome-do-componente
``` 
ou

```
ng g c nome-do-componente
```

- Criando os componentes dessa forma, serão automaticamente importados para o módulo principal (`app.module.ts`) do aplicativo. Cada componente terá os seguintes arquivos:

- `nome-do-componente.component.ts`

- `nome-do-componente.component.html`

- `nome-do-componente.component.css`

- `nome-do-componente.component.spec.ts` (para testes unitários e end-to-end (testes de ponta a ponta))

- O componente deve ser importado no módulo principal (app.module.ts) desse modo:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importação do componente criado
import { NomeDoComponenteComponent } from './exemplo/exemplo.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    // Declaração do componente criado
    AppComponent,
    NomeDoComponenteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- Após a importação do componente no módulo principal, deve ser usado como um marcador HTML

```HTML
<app-nome-do-componente></app-nome-do-componente>
```

- O que for modificado nesse componente vai aparecer no navegador