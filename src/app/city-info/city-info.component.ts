import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityInfo } from 'src/models/cityInfo.model';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {

  cityName: any;
  cityInfo: CityInfo[] = [];

  constructor(private activatedroute: ActivatedRoute, 
    public weatherDataService: WeatherDataService,
    public router:Router) { }

  ngOnInit() {
    this.cityName = this.activatedroute.snapshot.paramMap.get("cityName");
    
    this.weatherDataService.getForecastData(this.cityName)
    .subscribe(data =>{
      data.list.forEach((info: any) => {
        let dateInfo = new Date(info.dt_txt);
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        if((dateInfo <= currentDate) && (dateInfo.toLocaleTimeString('en-US') === '9:00:00 AM')){
          this.cityInfo.push({
            CityName: data.city.name,
            Temperature: info.main.temp,
            Date: info.dt_txt,
            SeaLevel: info.main.sea_level ? info.main.sea_level : 'Sea Level not available right now'
          })
        }
      });     
    })
  }

  navigateBack(){
    this.router.navigate(['/home/city'])
  }
}
