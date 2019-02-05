import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}
  title = 'PrisonSchool-UI';

  ngOnInit(){
    console.log('prisonschool is running');
    this.http.get('http://localhost:8080/PrisonSchool/Main').subscribe(val => console.log(val));
  }

}
