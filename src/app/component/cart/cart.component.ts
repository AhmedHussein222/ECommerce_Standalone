import { Component } from '@angular/core';
import { UserService } from '../../Services/User.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 constructor(private userService : UserService){
  
  this.userService.check({email:'AhmdHussein222@gmail.com',password:'this.isLogged'}).subscribe(
   (data)=>{   
    console.log(data)
    })}
 
}
