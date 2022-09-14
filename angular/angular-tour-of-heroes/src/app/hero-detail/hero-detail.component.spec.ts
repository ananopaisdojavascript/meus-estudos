import { HeroDetailComponent } from './hero-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HeroDetailComponent", () => {
  let fixture: ComponentFixture<HeroDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    fixture.detectChanges();
  })

  it("should create", () => {
    expect(fixture).toBeTruthy()
  })
})
