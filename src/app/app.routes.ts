import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ParentComponent } from './component/parent/parent.component';
import { MainComponent } from './component/main/main.component';

import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [

    {path:"",redirectTo:"main",pathMatch:'full'},
    
    {path:"main",component:MainComponent, children:
        [
            
            {path:"",redirectTo:"home",pathMatch:"full"},
            {path:"home",component:HomeComponent,title:"Home Page" },
            {path:"about",component:AboutUsComponent},
            {path:"products",component:ParentComponent},
            {path:"details/:id",component:ProductDetailsComponent},

        ]

    },
    {path:"**",component:NotFoundComponent}


];
