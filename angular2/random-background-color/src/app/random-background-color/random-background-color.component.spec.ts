import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RandomBackgroundColorComponent } from './random-background-color.component';

describe('RandomBackgroundColorComponent', () => {
  let component: RandomBackgroundColorComponent;
  let fixture: ComponentFixture<RandomBackgroundColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomBackgroundColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomBackgroundColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toEqual(component);
  });

  it('should display the random color button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('[data-random="random-color-click"]')
    expect(button).toEqual(button)
  })

  it('this button should contain the text "Click Here"', () => {
    const button = fixture.debugElement.nativeElement.querySelector('[data-random="random-color-click"]')
    expect(button.textContent).toContain('Click Here')
  })

  it('should call the method "randomBackgroundColor()"', fakeAsync(() => {
    spyOn(component, 'randomBackgroundColor');
    const button = fixture.debugElement.nativeElement.querySelector('[data-random="random-color-click"]')
    button.click()
    tick()
    expect(component.randomBackgroundColor).toHaveBeenCalled()
  }))

});
