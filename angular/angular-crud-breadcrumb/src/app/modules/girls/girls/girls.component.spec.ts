import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './../../../services/search-filter.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe } from 'mocha';

import { GirlsComponent } from './girls.component';

// describe: método que agrupa os testes;

describe('GirlsComponent', () => {
  let component: GirlsComponent;
  let fixture: ComponentFixture<GirlsComponent>;
  // beforeEach: método que configura pré definicões que o código pode ter.
  beforeEach(() => {
    // TestBed: simula e configura um ambiente Angular para podermos realizar
    // o teste de nossos componentes de modo isolado
    TestBed.configureTestingModule({
      declarations: [GirlsComponent, SearchFilterPipe],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(GirlsComponent);
    component = fixture.componentInstance;
  });

  // it: método que define um único teste, no qual vai conter a lógica que vai testar
  // a menor parte de um aplicativo

  // Arrange (definir a organização do que vai ser necessário para fazer o teste)
  // Action (definir uma ação que vai executar o teste)
  // Assert (definir o resultado esperado do teste)
  describe('rendering the component', () => {
    beforeEach(async () => {
      // Atualizar a interface
      await fixture.whenStable();
      fixture.detectChanges();
    });

    // Verificar o estado da interface
    it('shows the search bar', () => {});

    describe('type Choi YuJin in the search input', () => {
      beforeEach(async () => {});
    });
  });
});
