import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employees } from '../models/employees';
const baseUrl = 'https://retoolapi.dev/RA6kcz/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(baseUrl)
  }
  removeEmployee(id:number):Observable<Employees[]> {
    return  this.http.delete<Employees[]>(`${baseUrl}/${id}`)
  }
  addEmployee(data:any):Observable<any> {
    console.log(data)
    return  this.http.post(baseUrl, data)
  }
}
