import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cityName : string ="";
  response: any;
  

  constructor(private http:HttpClient){

  }
  search(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&appid=26312246dcd57cf04728a93f70af1fe8')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response)
    })
  }
}
