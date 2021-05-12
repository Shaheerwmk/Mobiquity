import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  europeanCountries: string[] = ['Istanbul', 'Florence', 'Seville', 'Rome', 'Lisbon'];
  publishedCityInfo: boolean = false;

  constructor(public weatherDataService: WeatherDataService, public router:Router) { }

  ngOnInit(): void {
    this.europeanCountries.forEach(city => {
      this.weatherDataService.getWeatherData(city)
        .subscribe((data: any) => {
          this.publishCityInfo(data);
          this.weatherDataService.cityInfo.length === 5 ? this.publishedCityInfo = true : this.publishedCityInfo = false;
        });
    });
  }

  publishCityInfo(data: any) {
    if(this.weatherDataService.cityInfo.length !== 5 ){
      this.weatherDataService.cityInfo.push({
        CityName: data.name,
        Temperature: data.main.temp,
        SunriseTime: new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US"),
        SunsetTime: new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US"),
        SeaLevel: data.main.sea_level ? data.main.sea_level : 'Sea Level not available right now'
      });
    }   
  }

  openCityInfo(city: string) {
    this.weatherDataService.getWeatherData(city)
      .subscribe((data: any) => {
        data ? this.router.navigate(['/home/cityInfo/', city]) : null;
      })
  }
}
