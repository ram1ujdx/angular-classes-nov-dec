import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  today:Date=new Date();
  isDisabled:boolean=false;
  name:string='Rahul';
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{this.today=new Date();},1000)
  }

  show(name:string){
    //alert("Hello Everyone!!!")
  this.name=name;
  console.log(name);
  }

}
