import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { GithubClientComponent } from '../github-client/github-client.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';
import { ViewEmployeesComponent } from '../view-employees/view-employees.component';

const routes: Routes=[

  {
    path:'github-client', component:GithubClientComponent
  }
  ,
  {
    path:'add-employee', component:AddEmployeeComponent
  },
  {
    path:'view-all',component:ViewEmployeesComponent
  },
  {
    path:'view-employee/:id',component:ViewEmployeeComponent, children:[
    {
      path:'update/:id', component:UpdateEmployeeComponent
    }
    ]
  },
  {
    path:'',component:AddEmployeeComponent
  },
  {
    path:'error', component:ErrorPageComponent
  }
  // {
  //   path:'**',redirectTo:'/error'
  // }
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
