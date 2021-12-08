import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ExportCityService} from '../export-city.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit  {
  response:any;
  errorMessage:boolean= false;
  exportedCityBoolean:boolean = false;
  exportedCity:string|any;
  dataSource:[] | any = []; 
  isLoading:boolean=false;

  constructor(
    private http:HttpClient,
    private readonly exportCityData: ExportCityService,
    private _location: Location
  ) { }
  
  ngOnInit(): void {
    
    // console.log(this.exportCityData.exportCity)
    this.exportedCity=this.exportCityData.exportCity
    this.getData()
    
  }

  getData(){
    this.errorMessage = false;
    this.isLoading = true;
    this.exportedCityBoolean = true;
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.exportedCity+'&appid=26312246dcd57cf04728a93f70af1fe8&cnt=50')
    .subscribe(
      (response)=>{
        this.response = response;
        this.dataSource.push(this.response.list);
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = true;
        this.isLoading = false;
        this.exportedCityBoolean = false;
        // тут нужен таймер б и можно было без кнопки назад
        // this._location.back()
        ;
      },
    )
  }

  refreshData(){
    this.isLoading = true;
    this.response = [];
    this.dataSource.length = 0;
    this.getData()
  }
}
