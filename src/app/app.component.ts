import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./component/product/product.component";
import { ParentComponent } from "./component/parent/parent.component";
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from "./component/header/header.component";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ParentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerce_stand';
}
