import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../../Services/product-data.service';
import { Iproduct } from '../../Models/iproduct'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductApiService } from '../../Services/product-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule ],
  providers: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit{
  ids:number[]=[]
  product!:Iproduct ;
  currentId!:number;
  index!:number ;
  constructor(
    private url: ActivatedRoute,
    private _ProductDataService: ProductDataService,
    private _ProductApi: ProductApiService,
    private router: Router

  ) {
    // get ids from static services
    // this.ids=this._ProductDataService.getIds()

    // get ids from api services
    this._ProductApi.getProducts().subscribe(
      {
        next:(products)=>{
          this.ids=products.map(p=> Number(p.id))
          console.log(this.ids)
          
        }
      }
    )
    
    this.url.paramMap.subscribe((params) => {
         this.currentId = Number(params.get('id'))

        //  get product by  static
        //  let check = this._ProductDataService.getProductByID(this.currentId);
        //  if(check) {
        //    this.product = check;
        //    console.log(this.product);
           
        //  } else {
        //    this.router.navigate(['**'])
           
        //  }
         
      });
   }
  ngOnInit(): void {

    this._ProductApi.getProductByID(this.currentId).subscribe({
      next:(product)=>{
        this.product = product
        
      },
      error:()=>{
           this.router.navigate(['**'])

      }

    })
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
