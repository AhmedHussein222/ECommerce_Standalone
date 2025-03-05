import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient
  ) { 
  }
  getProducts():Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/product`);// 'http://localhost:3000/product'
}
getProductByID(id: number): Observable<Iproduct>  {  
  return this.http.get<Iproduct>(`${environment.baseUrl}/product/${id}`)

  }
updateProduct(product: Iproduct ): Observable<Iproduct>  {  
  return this.http.put<Iproduct>(`${environment.baseUrl}/product/${product.id}`,product)

  }
addProduct(product: Iproduct): Observable<Iproduct>  {  
  return this.http.post<Iproduct>(`${environment.baseUrl}/product/`,product)

  }
deleteProduct(productId:string): Observable<Iproduct>  {  
  return this.http.delete<Iproduct>(`${environment.baseUrl}/product/`+productId)

  }
     
}