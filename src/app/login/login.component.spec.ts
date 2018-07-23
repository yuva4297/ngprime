
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('Component: SectionComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let loginComponent: LoginComponent;
    let element: any;
    let debugElement: DebugElement;
    let de:DebugElement;
let el:HTMLElement;

    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule,HttpModule,ReactiveFormsModule],
            declarations: [LoginComponent]
        });

        fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
       
    });

    afterEach(() => {
        if (fixture) {
            fixture.destroy();
        }
    });
    it('should create form with 4 controls',()=>{
        expect(loginComponent.form.contains('username')).toBeTruthy;
        expect(loginComponent.form.contains('password')).toBeTruthy;
        
        
      });
      it('should make the controls required',()=>{
let control=loginComponent.form.get('password');
control.setValue('');
expect(control.valid).toBeFalsy();

      })
    
    it('should render `James Bond`', async(() => {
        loginComponent.username = 'James';

       
        fixture.detectChanges();

       
        fixture.whenStable().then(() => {
          
            expect(element.querySelector('input[name=username]').value).toBe('James');
        });
   }));
   it(' password field validity',()=>{
    
        expect(loginComponent.form.contains('password')).toBeTruthy();       
   });
   it(' password field validity',()=>{
   expect(loginComponent.username).not.toBeNull();
    
});
   
   it('should set submitted to true',async(()=>{
    loginComponent.onSubmit();
    expect(loginComponent.submitted).toBeTruthy();
  }));
  

});

