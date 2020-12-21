import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeDataService } from '../employee-data.service';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

 
  constructor(public data:EmployeeDataService, private router:Router) { }

  ngOnInit(): void {
   
  }

  showEmployee(employeeId:number){
      this.router.navigate(['/view-employee/'+employeeId])
  }

}
