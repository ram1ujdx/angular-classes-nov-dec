import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  today:Date=new Date();
  day:string='Satur Day';
  isDisabled:boolean=false;
  name:string='';
  nameList:Array<string>=[];
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{this.today=new Date();},1000)
  }

  addName(name:string){
      this.nameList.push(name);
      console.log(this.nameList);
  }

  deleteName(){
    this.nameList.pop();
  }

  getBackgroundColor(personName:string):string{
    return personName.length>5?'red':'green';
  }
}
