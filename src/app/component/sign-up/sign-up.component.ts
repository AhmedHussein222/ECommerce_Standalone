import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../../Models/Iuser'
import { Observable } from 'rxjs';
import { UserService } from '../../Services/User.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
    isLogged:boolean = false

    constructor(
      private _user : UserService,
      private router:Router,
      private auth : UserAuthService
    ){
      
    }



}

//   this.loginForm = new FormGroup({
//     email:new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.minLength(3)]),
//   })
// }

// loginForm:FormGroup
// user:Iuser ={} as Iuser

//   // addNewUser() {
//   //   this._user.addUser(this.user).subscribe({
//   //     next:(data)=>{
//   //       console.log(data);
//   //       this.router.navigate(['/main/products'])
//   //     }
      

//   //   });
//   // }
//   addNewUser() {
//     // this._user.addUser(this.user).subscribe({ // this.user     using driven template in html file
//     this._user.addUser(this.loginForm.value).subscribe({
//       next:(data)=>{
//         console.log(data);
//         // this.router.navigate(['/main/products'])
//       }
      

//     });
//   }

//   login(){
//     this.auth.login(this.loginForm.value)
//     this.isLogged = true
//     // console.log(this.isLogged);
//   }

