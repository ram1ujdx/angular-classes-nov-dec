import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeApiService } from '../employee-api.service';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

 employeeList:Array<Employee>;
  constructor(private _employeeApiService:EmployeeApiService, private router:Router) { }

  ngOnInit(): void {
   this._employeeApiService.getAllEmployees().subscribe(
      response=>this.employeeList=response,
      error=>alert("No Data Found")
   )
  }

  showEmployee(employeeId:number){
      this.router.navigate(['/view-employee/'+employeeId])
  }

}
