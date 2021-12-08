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
  errorRepeatCity:boolean=false;
  isLoading:boolean=false;
  usedCityList:any=[] ;
  errorMessage:boolean=false;

  constructor(
    private http:HttpClient,
    private exportCityData: ExportCityService
    ) { }

  ngOnInit(): void {
  }

  search(){
    this.isLoading = true;
    this.errorMessage = false;
    this.errorRepeatCity = false;
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&appid=26312246dcd57cf04728a93f70af1fe8')
    .subscribe(
      (response)=>{
        this.errorMessage = true;
        this.response = response;
        this.errorRepeatCity = false;
        if (!this.usedCityList.includes(this.response.name)){
          this.usedCityList.push(this.response.name);
          this.dataSource.push(this.response);
         
          this.exportCityData.exportCity = this.cityName;
        }
        else{
          this.errorMessage = false;
          this.isLoading = false;
          this.errorRepeatCity = true;
        };
        
        this.errorMessage = false;
        this.isLoading = false;
      },
      (error) => {
        this.errorRepeatCity = false;
        this.isLoading = false;
        this.errorMessage = true;
      },
    )
  }
}




