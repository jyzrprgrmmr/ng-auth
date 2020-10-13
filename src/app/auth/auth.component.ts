import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SharedService } from '../services/shared.service';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  loginform: FormGroup;
  regform: FormGroup;
  errorMessage:string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sharedService: SharedService,
    private toastr: ToastrService
    
  ) {
    
    this.regform = fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      gender:['',Validators.required],
      role: [1],
      email: ['',Validators.required],
      password: ['',Validators.required],
      password1: ['',Validators.required],
    },
    {
      validator: MustMatch('password', 'password1')
    }
    );

    this.loginform = fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });

   }

  ngOnInit(): void {
  }

  get f() { 
    if(this.isLoginMode){
      return this.loginform.controls; 
    }else{
      return this.regform.controls; 
    }
    
  }

  login(){
    this.userService.login(this.loginform.value).subscribe((res) => {
      if(res){
        if (typeof localStorage !== 'undefined') {
        localStorage.setItem('token' , res.token);
        localStorage.setItem('active_user' , JSON.stringify(res.user));
        }
        this.sharedService.getLocalStorage();
        this.router.navigate(['/']);
      }
      
    },(err) => {
      this.errorMessage = 'Email or Password is incorrect!';
    });
  }


  register(){
    this.userService.addUser(this.regform.value).subscribe((res) => {
      if(res.message){
        this.toastr.success(res.message);
        this.toggleMode();
      } else {
        this.errorMessage = res.errors[0].message;

        if(this.errorMessage == 'users.email must be unique'){
          this.errorMessage= "Email already exist on our database";
        }
      }

    });
  }

  toggleMode(){
    this.errorMessage = '';
    this.isLoginMode = !this.isLoginMode;
    
  }

}
