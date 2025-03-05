import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  authService = inject(UserAuthService);
  isLogged:boolean =false
  auth=Inject(UserAuthService)

  ngOnInit(): void {

    // this.isLogged = this.authService.isLogged;
    this.authService.isLoggedObs().subscribe((state)=>this.isLogged=state);


  }
  logout(){
    this.authService.logout()
    this.isLogged = false
  }


}
