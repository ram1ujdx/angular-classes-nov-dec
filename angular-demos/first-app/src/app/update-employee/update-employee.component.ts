import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _dataService:EmployeeDataService, private _router:Router) { }

 
  employee:Employee;


  ngOnInit(): void {
    this._route.params.subscribe(
      param=>{
          let employeeId=param['id'];
          this.employee=this._dataService.getEmployeeById(employeeId);
      }
    )
  }


  updateEmployee(){
    this._dataService.updateEmployee(this.employee);
    this._router.navigate(['/view-employee/'+this.employee.employeeId]);
    alert("Successfully Updated")
  }

}
