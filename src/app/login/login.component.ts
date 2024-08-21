import { Component } from '@angular/core';
import { loginService } from './login.component.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from "rxjs";
import * as loginStrings from "../stringFile/login.json";
import { commonFunctionService } from "../utils/commonFunction";
declare var customToastr: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,  // Ensure this is a standalone component
  imports: [CommonModule], 
  // Import CommonModule
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  email: string ='';
  imagepath: string ='../../assets/img/background.png';
  password: string = '';
  errorMessage: string = '';
  loginStrings: any = loginStrings;
  constructor(private loginService: loginService, 
    private commonFunction: commonFunctionService,
     private router: Router) {
      
  }



  
  
  //  validateEmail(email) {
  //   // Define the regular expression pattern for validating an email
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //   // Test the email against the pattern
  //   return emailPattern.test(email);
  // }
  emailinput(value : string):void {
    this.email=value;
console.log(value)
  }

}
