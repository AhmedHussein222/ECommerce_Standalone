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
    return this.http.get<Iproduct[]>(`'${environment.baseUrl}}/products'`);
}
getProductByID(id: number): Observable<Iproduct>  {  
  return this.http.get<Iproduct>(`'${environment.baseUrl}/${id}'`)

  }



  
      
}