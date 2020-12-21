import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee:Employee;
  constructor(private route:ActivatedRoute, private _dataService:EmployeeDataService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param=>{
        let employeeId=param['id'];
        this.employee=this._dataService.getEmployeeById(employeeId);
      }
    )
  }

  deleteEmployee(employeeId:number){
    if(confirm("Sure to Delete?")){
      this._dataService.deleteEmployeeById(employeeId);
      alert("Successfully Deleted");
      this.router.navigate(['/view-all']);
    }
  }

  updateEmployee(employeeId:number){
    this.router.navigate(['/view-employee/'+employeeId+'/update/'+employeeId]);
  }

}
