import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  })

  it("should be true", () => {
    expect(true).toBeTruthy()
  })

  it("should have as title 'Tour of Heroes'", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBe('Tour of Heroes')
  })

  it("should render title in a h1 tag", () => {
    const compiled = fixture.debugElement.nativeElement;
    const h1 = compiled.querySelector('h1').textContent;
    expect(h1).toContain('Tour of Heroes')
  })
})
