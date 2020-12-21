import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
 
  constructor(private data:EmployeeDataService) { }

  ngOnInit(): void {
   
  }

  addEmployee(employee:Employee){
    this.data.employeeList.push(employee);
    alert("Employee Added Successfully")
  }

}
