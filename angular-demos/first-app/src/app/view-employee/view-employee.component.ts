import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeApiService } from '../employee-api.service';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private route:ActivatedRoute, private _employeeApiService:EmployeeApiService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>{
        let employeeId=param['id'];
        this._employeeApiService.getEmployeeById(employeeId).subscribe(
          response=>this.employee=response,
          error=>alert("Error!! Employee Not Found")
        );
        });
  }

  deleteEmployee(employeeId:number){
    if(confirm("Sure to Delete?")){
      this._employeeApiService.deleteEmployeeById(employeeId).subscribe(
        response=>{
          alert("Successfully Deleted");
          this.router.navigate(['/view-all']);
        },
        error=>alert("Operation Failed")
      )
     
    }
  }

  updateEmployee(employeeId:number){
    this.router.navigate(['/view-employee/'+employeeId+'/update/'+employeeId]);
  }

}
