import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceegComponent } from './serviceeg.component';
import { IncrementDecrementService } from '../incrementdecrement.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { debug } from 'util';
describe('ServiceegComponent', () => {
  let component: ServiceegComponent;
  let fixture: ComponentFixture<ServiceegComponent>;
  let debugElement: DebugElement;
  let incrementDecrementService: IncrementDecrementService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceegComponent ],
      providers: [ IncrementDecrementService ]

    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceegComponent);
    debugElement=fixture.debugElement;
    component = fixture.componentInstance;
  incrementDecrementService = debugElement.injector.get(IncrementDecrementService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment in template', () => {

    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');
  });

  it('should stop at 15 and show maximum message', () => {
    incrementDecrementService.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(value).toEqual('15');
    expect(message).toContain('Maximum');
  });
});



