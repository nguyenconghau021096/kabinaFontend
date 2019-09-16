// Writed by Chi
// All serve for table components 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root'})
export class ShelfServices {
  constructor(private http: HttpClient) {}

  getUser(userId: number){ 
    let url = `${environment.apiUrl}/users/${userId}`;
    return this.http.get(url);
  }

  getShelfList(unitId){
    return this.http.get(`${environment.apiUrl}/units/${unitId}/shelves`);
  }
}