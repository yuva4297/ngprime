import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {   EventEmitter, Output } from '@angular/core';
import { Angular5testingComponent, getuser } from './angular5testing.component';
import { Component, inject } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';



describe('Angular5testingComponent', () => {
  let component: Angular5testingComponent;
  let fixture: ComponentFixture<Angular5testingComponent>;
  let firstNumber :number = 0;
  let secondNumber :number = 0;
  let result : number = 0;
  let objCaculator : Angular5testingComponent;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular5testingComponent ]
    })
    .compileComponents();
  }));

  let expected = "";

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular5testingComponent);
    component = fixture.componentInstance;
        fixture.detectChanges();
   
  });
 
 afterEach(() => {
    expected = "";
    this.firstNumber=0;
    this.secondNumber=0;
    this.result=0;
  });
  it('should return the supported users',()=>{
    const res=getuser();
    expect(res).toContain('kaviya');
    expect(res).toContain('anitha');
    expect(res).toContain('yuva');
  });

  
});

it('check number addition', () => {
  let com2=new Angular5testingComponent();

  this.firstNumber=10;
  this.secondNumber=20;
  this.result=this.firstNumber + this.secondNumber;
  expect(com2.addNumbers())
      .toEqual(this.result);
});

it('check number Subtract', () => {
  let com1=new Angular5testingComponent();

  this.firstNumber=10;
  this.secondNumber=20;
  this.result=this.firstNumber - this.secondNumber;
  expect(com1.subtractNumbers())
      .toEqual(this.result);
});
it('check number Multiply', () => {
  let com=new Angular5testingComponent();
  this.firstNumber=10;
  this.secondNumber=20;
  this.result=this.firstNumber * this.secondNumber;
  expect(com.multiplyNumbers())
      .toEqual(this.result);
});


 
  it('should emit on click', () => {
    let comp=new Angular5testingComponent();
  comp.eventEmitter.subscribe(e => {
        expect(e).toEqual('hy event emmitter is used');
      
    });
    comp.buttonClick();
});
it('should emit on click', () => {
  let c=new Angular5testingComponent();
  spyOn(c.eventEmitter, 'emit');
  c.buttonClick();
  expect(c.eventEmitter.emit).toHaveBeenCalled();
  expect(c.eventEmitter.emit).toHaveBeenCalledWith('hy event emmitter is used');
});
xdescribe('Hello world', () => { 
  let component: Angular5testingComponent;
  xit('says hello', () => { 
    expect(component.helloWorld())
        .toEqual('Hello world!');
      });
    });

  


