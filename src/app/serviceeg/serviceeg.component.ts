import { Component, OnInit } from '@angular/core';
import { IncrementDecrementService } from '../incrementdecrement.service';

@Component({
  selector: 'app-serviceeg',
  templateUrl:'./serviceeg.component.html', 
  styleUrls: ['./serviceeg.component.css']
})
export class ServiceegComponent implements OnInit {

  constructor(public incrementDecrement: IncrementDecrementService) {}
  increment() {
    this.incrementDecrement.increment();
  }
  decrement() {
    this.incrementDecrement.decrement();
  }

  ngOnInit() {
  }

}
