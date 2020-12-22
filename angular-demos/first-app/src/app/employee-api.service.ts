import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  baseUrl="http://localhost:8088/employee/";
  constructor(private _http:HttpClient) { }

  public addEmployee(employee:Employee):Observable<Employee>{
    return  this._http.post<Employee>(this.baseUrl+"add",employee);
  }

  getAllEmployees():Observable<Array<Employee>>{
    return this._http.get<Array<Employee>>(this.baseUrl+"all");
  }

  getEmployeeById(employeeId:number):Observable<Employee>{
    return this._http.get<Employee>(this.baseUrl + "id/" + employeeId);
  }

  deleteEmployeeById(employeeId:number):Observable<any>{
    return this._http.delete(this.baseUrl + "id/" + employeeId);
  }

  updateEmployee(employee:Employee):Observable<Employee>{
    return  this._http.put<Employee>(this.baseUrl+"update",employee);
  }

}
