import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-angular5testing',
  templateUrl: './angular5testing.component.html',
  styleUrls: ['./angular5testing.component.css']
})
export class Angular5testingComponent implements OnInit {
  name: any;
  
  constructor() {
       
   }
  private _firstNumber:number=10;
    private _secondNumber:number=20;
    private _result : number = 0;
   
  ngOnInit() {
  }
  @Output() eventEmitter = new EventEmitter();

  buttonClick() {
    this.eventEmitter.emit('hy event emmitter is used');}

   helloWorld() {
    return 'Hello world!';
  } 
  
    hellouser(){
      if(this.name="James")
      {
        return "Welcome James";
      }
      else{
        return "Welcome"+this.name;
      }
    }
  addNumbers():number{
    this._result = this._firstNumber + this._secondNumber;
    return this._result;
}
subtractNumbers():number{
    this._result = this._firstNumber - this._secondNumber;
    return this._result;
}
 multiplyNumbers():number{
    this._result = this._firstNumber * this._secondNumber;
    return this._result;
} 
 

}
export function getuser()
  {
    return ['kaviya','yuva','anitha'];
  }