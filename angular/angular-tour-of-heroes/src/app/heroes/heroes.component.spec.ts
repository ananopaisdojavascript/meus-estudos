import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let fixture: ComponentFixture<HeroesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
  })

  it("should create", () => {
    expect(fixture).toBeTruthy()
  })
})
