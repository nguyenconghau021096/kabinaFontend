// Writed by Chi
// All serve for table components 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ShelfServices {
  constructor(private http: HttpClient) { }

  // getUser(userId: number){ 
  //   let url = `${environment.api}/users/${userId}`;
  //   return this.http.get(url);
  // }

  getShelfList(unitId) {
    return this.http.get(`${environment.api}/findAllBookingDetailFromUnit?unitId=` + unitId)
  }
  parseShelfDataToArray(data) {
    let arr = [];
    for(var key in data){
      let floor=data[key];
        this.parseShelfDataToArrayFloor(floor);
    }
  }
  parseShelfDataToArrayFloor(data){
    let arr = [];
    for (var key in data){
        arr.push(this.parseShelfDataToArrayFloorFree(data[key], key))
    }
    console.log('asfasf')
    console.log(arr);
    return arr;
  }
  parseShelfDataToArrayFloorFree(data, status ){
    console.log(data)
    let arr=[];
    if(status=='Free'){
      for(var key in data){
        console.log(key)
        arr.push({key:['','','','','']})
      }
    }
    else{
      arr=data;
    }
    return arr;
  }
}