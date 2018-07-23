import { Component, OnInit } from '@angular/core';
//import { Validators, FormControl, FormGroup } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string;
  submitted=false;
  constructor() {}
    form = new FormGroup({
      'password': new FormControl('', Validators.required)
   
});
  
  ngOnInit() {
  }
  onSubmit():void{
    this.submitted=true;
    
  }
}



    
   

   



