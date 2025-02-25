import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";
import { Iproduct } from '../../Models/iproduct';
import { ProductDataService } from '../../Services/product-data.service';
import { ProductApiService } from '../../Services/product-api.service';

@Component({
  selector: 'app-parent',
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  
  products: Iproduct[] = [];
constructor(private _productService:  ProductDataService
  , private _productApi :ProductApiService
) {
  // this.products = this._productService.getProducts();


  
  
}
ngOnInit(): void {
this._productApi.getProducts().subscribe(
  {
    next:(d)=>{console.log(d);
    }
  }
)
   
 }



  filterByName!:string

  productsInParent: Iproduct[] = [];


  
  AddToCartInParent(prd: Iproduct) {
    let PrdInArr = this.productsInParent.find(
      (Pid) => Pid.id === prd.id
    );
    if (PrdInArr) {
      PrdInArr.productQuantity++;
      prd.productQuantity--;
    } else {
      this.productsInParent.push({ ...prd, productQuantity: 1 });
    }

  }
deleteFromCart(item: Iproduct) {

  this.productsInParent = this.productsInParent.filter(
    (productCart) => productCart.id !== item.id
  );
}
    

  
}