import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  


              //api
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Angular5testingComponent } from './angular5testing/angular5testing.component';
import { ServiceegComponent } from './serviceeg/serviceeg.component';
import { IncrementDecrementService } from './incrementdecrement.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Angular5testingComponent,
    ServiceegComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [IncrementDecrementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
