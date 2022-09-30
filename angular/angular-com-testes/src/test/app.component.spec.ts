import { AppComponent } from './../app/app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it("should create", () => {
    expect(component).toBeTruthy();
  })
})
