import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityName : string ="";
  response: any;
  dataSource:[] | any = []; 
  errorMessage:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  search(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&appid=26312246dcd57cf04728a93f70af1fe8')
    .subscribe(
      (response)=>{
        this.response = response;
        console.log(this.response);
        this.dataSource.push(this.response);
        console.log(this.dataSource);
      },
      (error) => {
        console.log(error);
        this.errorMessage = "Город не найден"
      },
    )
  }
}




