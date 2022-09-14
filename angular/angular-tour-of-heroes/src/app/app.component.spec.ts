import { Component } from "@angular/core";
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from "./app.component";

@Component(
  { selector: 'app-heroes', template: '' }
)
class HeroesStubComponent{}

@Component(
  { selector: 'app-messages', template: '' }
)
class MessagesStubComponent{}

describe("AppComponent", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeroesStubComponent, MessagesStubComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  })

  it("should create the app", (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy()
  }))
})
