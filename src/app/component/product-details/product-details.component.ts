import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../../Services/product-data.service';
import { Iproduct } from '../../Models/iproduct'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule ],
  providers: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  ids:number[]=[]
  product!:Iproduct ;
  currentId!:number;
  index!:number ;
  constructor(
    private url: ActivatedRoute,
    private _ProductDataService: ProductDataService,
    private router: Router

  ) {
    this.ids=this._ProductDataService.getIds()


      this.url.paramMap.subscribe((params) => {
         this.currentId = Number(params.get('id'))
         let check = this._ProductDataService.getProductByID(this.currentId);
   
         if(check) {
           this.product = check;
           console.log(this.product);
           
         } else {
           this.router.navigate(['**'])
           
         }
         
      });
   }

  next() {
    this.index = this.ids.indexOf(this.currentId);
    this.router.navigate(['main/details', this.ids[this.index + 1]]);
  }   

  prev() {
    this.index = this.ids.indexOf(this.currentId);
    this.router.navigate(['main/details', this.ids[this.index - 1]]);
  }
}
