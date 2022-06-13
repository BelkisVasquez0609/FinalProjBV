import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  //Obtener
  getData(){
    let url = 'http://localhost:3000/data';
     return this.http.get<Budget[]>(url)
  }
  //Guadar
  setData(budget:Budget): Observable<any>{
    let url = 'http://localhost:3000';
    return this.http.post(`${url}/data`, budget)
   
  }
  //Eliminar
  deleteData(id:number){
    let url = 'http://localhost:3000';
    return this.http.delete(`${url}/data/${id}`)
  }
  
}
