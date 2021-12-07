import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExportCityService} from '../export-city.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityName : string ="";
  response: any;
  dataSource:[] | any  = []; 
  errorMessage:any;
  isLoading:boolean=false;
  usedCityList:any=[] ;
  

  constructor(
    private http:HttpClient,
    private exportCityData: ExportCityService
    ) { }

  ngOnInit(): void {
  }

  search(){
    this.isLoading = true;
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&appid=26312246dcd57cf04728a93f70af1fe8')
    .subscribe(
      (response)=>{
        this.errorMessage = "";
        this.response = response;
        
        if (!this.usedCityList.includes(this.response.name)){
          this.usedCityList.push(this.response.name);
          this.dataSource.push(this.response);
         
          this.exportCityData.exportCity = this.cityName;
        }
        else{
          this.errorMessage = "Город уже есть";
        };
        
       
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = "Не правильный ввод";
        this.isLoading = false;
      },
    )
  }
}




