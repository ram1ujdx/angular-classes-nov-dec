import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeList:Array<Employee>=[];

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(employee:Employee){
    this.employeeList.push(employee);
    console.log(this.employeeList);
  }

}
