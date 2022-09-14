import { HeroSearchComponent } from './hero-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HeroSearchComponent", () => {
  let fixture: ComponentFixture<HeroSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    fixture.detectChanges();
  })

  it("should create", () => {
    expect(fixture).toBeTruthy()
  })
})
