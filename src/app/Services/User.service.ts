import { Injectable } from '@angular/core';
import { Iuser } from '../Models/Iuser';
import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http : HttpClient) { }

   addUser(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseUrl}/users`,user)
    
   }

   check(user:Iuser):Observable<boolean>{
    return this.http.get<Iuser[]>(`${environment.baseUrl}/users/?username=${user.email}&password=${user.password}`).pipe(
      map(user=>
        user.length > 0 ? true:false,
        console.log(user)
        
      )

    )
      

}}
