import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ParentComponent } from './component/parent/parent.component';
import { MainComponent } from './component/main/main.component';

import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { UserComponent } from './component/user/user.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CartComponent } from './component/cart/cart.component';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [

    {path:"",redirectTo:"main",pathMatch:'full'},
    
    {path:"main",component:MainComponent, children:
        [
            
            {path:"",redirectTo:"home",pathMatch:"full"},
            {path:"home",component:HomeComponent,title:"Home Page" },
            {path:"about",component:AboutUsComponent},
            {path:"products",component:ParentComponent},
            {path:"signup",component:UserComponent},
            {path:"dashboard",component:DashboardComponent},
            {path:"details/:id",component:ProductDetailsComponent},
            {path:"cart",component:CartComponent ,canActivate:[authGuardGuard]},

        ]

    },
    {path:"**",component:NotFoundComponent}


];
