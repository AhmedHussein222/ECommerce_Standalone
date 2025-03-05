import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  Products:Iproduct[]=[]
  constructor() {
    // coment inatialze data   to solve error
    //  this.Products = [
    //   {
    //     id: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails: 'lorem lorem lorem lorem  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus metus vel felis fermentum, at ullamcorper lectus dignissim. Sed at turpis non felis rutrum  ',
    //   },
    //   {
    //     id: 2,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&width=240',
    //     productQuantity: 2,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 3,
    //     productName: 'Apple iPhone 13',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&width=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 4,
    //     productName: 'Samsung Galaxy ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 5,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 6,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 2,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 7,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 3,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 8,
    //     productName: 'Reno 11F',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    //   {
    //     id: 9,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryId: 1,
    //     productDetails: 'lorem lorem lorem lorem    ',
    //   },
    // ];

    // this.Products=[]
    
  }

getProductByID(prodID:string):Iproduct|undefined{
  let product= this.Products.find(p=>p.id==prodID) ;
  return product ;
}

getProducts():Iproduct[]  {
  return this.Products;
}

filterByName(value: string):Iproduct[]|undefined {
  
    return this.Products.filter((product) => {
      return product.productName.toLowerCase().includes(value.toLowerCase());
    });
  }

  getIds(){
    return this.Products.map(p=>p.id);
  }
  

}




/*     Add a custom service ‘Products Service’:
a)	In the service add these functions (Depending on the classes you created before):
i)	getProducts: Products []
ii)	getProductByID(prodID): Product
iii)	filterProducts()
iv)	What’s the meaning of ProvidedIn: ‘root’, in the service @injectable function?
v)	Use this service to get and filter data in product component 
 */