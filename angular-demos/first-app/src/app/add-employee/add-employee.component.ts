import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeApiService } from '../employee-api.service';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
 
  constructor(private _employeeApiService:EmployeeApiService) { }

  ngOnInit(): void {
   
  }

  addEmployee(employee:Employee){
    this._employeeApiService.addEmployee(employee).subscribe(
      response=>{
        console.log(response);
        alert("Employee Added Successfully")
      },
      error=>alert("Error!! Employee Not Added")
    )
  }

 

}
