import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeApiService } from '../employee-api.service';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _employeeApiService:EmployeeApiService, private _router:Router) { }

 
  employee:Employee;


  ngOnInit(): void {
    this._route.params.subscribe(
      param=>{
          let employeeId=param['id'];
          this._employeeApiService.getEmployeeById(employeeId).subscribe(
            response=>this.employee=response,
            error=>alert("Error!! Employee Not Found")
          );
      }
    )
  }


  updateEmployee(){
    this._employeeApiService.updateEmployee(this.employee).subscribe(
      response=>{
        this._router.navigate(['/view-employee/'+this.employee.employeeId]);
        alert("Successfully Updated");
        console.log(response);
      },
      error=>alert("Updation Failed")
    )
    
    
  }

}
