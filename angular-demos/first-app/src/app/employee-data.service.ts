import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  
  employeeList:Array<Employee>=[];
  
  

  constructor(){
      this.employeeList=[{
        email:'rahul@gmail.com',
        employeeId:10010,
        salary:25000,
        employeeName:'Rahul Reddy'
      },
      {
        email:'rohit@gmail.com',
        employeeId:10011,
        salary:28000,
        employeeName:'Rohit Pandey'
      },
      {
        email:'mahesh@gmail.com',
        employeeId:10013,
        salary:35000,
        employeeName:'Mahesh Reddy'
      }

    ]
  }

  getEmployeeById(employeeId:number):Employee{
    
    for(let i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].employeeId==employeeId){
        return this.employeeList[i];
      }
    }

  }

  deleteEmployeeById(employeeId:number){
    
    for(let i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].employeeId==employeeId){
        this.employeeList.splice(i,1);
      }
    }

  }

  updateEmployee(employee:Employee){
    
    for(let i=0;i<this.employeeList.length;i++){
      if(this.employeeList[i].employeeId==employee.employeeId){
        this.employeeList[i]=employee;
      }
    }

  }

}
