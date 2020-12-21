import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './employee-name-validator';

@Component({
  selector: 'app-epmloyee-reactive',
  templateUrl: './epmloyee-reactive.component.html',
  styleUrls: ['./epmloyee-reactive.component.css']
})
export class EpmloyeeReactiveComponent implements OnInit {

  constructor(private fBuilder:FormBuilder) { }

  // employeeForm=new FormGroup(
  //   {
  //     employeeId:new FormControl(''),
  //     employeeName:new FormControl(''),
  //     email:new FormControl(''),
  //     salary:new FormControl('')
  //   }
  // )

  employeeForm=this.fBuilder.group(
    {
      employeeId:['10001',[Validators.required,Validators.min(10000)]],
      employeeName:['Rahul Sharma',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      email:['rahuls@yahoo.com',[Validators.email]],
      salary:['35000'],
      addressForm:this.fBuilder.group({
        city:[''],
        state:[''],
        zipCode:['']
      })
    }
  )

  ngOnInit(): void {
  }
  
  fun(){
    console.log(this.employeeForm);
  }

}
