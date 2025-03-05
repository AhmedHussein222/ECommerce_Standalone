import { Component} from '@angular/core';
import { Iuser } from '../../Models/Iuser'
// import { Observable } from 'rxjs';
import { UserService } from '../../Services/User.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule,ReactiveFormsModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {

  user:Iuser ={} as Iuser
  loginForm: FormGroup;
  signupForm: FormGroup;
  isLogged:boolean = false

  constructor(
    private _user : UserService,
    private router:Router,
    private auth : UserAuthService
  ){
    
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(3)]),
    })
    this.signupForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(3)]),
    })
  }

  addNewUser() {
    // this._user.addUser(this.user).subscribe({ // this.user     using driven template in html file
    this._user.addUser(this.signupForm.value).subscribe({
      next:(data)=>{
        console.log(data,'Signup');
        Swal.fire({ title: 'Sign Up Successfuly', text: '', icon: 'success', timer: 3000, showConfirmButton: false })
      }
    });
  }

  login(){
    this.auth.login(this.loginForm.value)
    this.isLogged = true
    this.auth.isLoggedObs().subscribe((data)=>{
      if (data) {
        this.router.navigate(['/main/cart'])
        }
      }
      )
        
      
  }

// observable -------------------------------------------
  // login(){   //convert to sign up method 
  //   this.auth.login()
  //   this.isLogged = true
  //   console.log(this.isLogged);
  // }
  
}
 
