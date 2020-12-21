import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-github-client',
  templateUrl: './github-client.component.html',
  styleUrls: ['./github-client.component.css']
})
export class GithubClientComponent implements OnInit {

  constructor(private _http:HttpClient) { }
user:User;
  ngOnInit(): void {
  }

  showGithubInfo(login:string){
    this._http.get('https://api.github.com/users/'+login).subscribe(
      (response:User)=>{
        this.user=response;
      }
    );
  }

}
