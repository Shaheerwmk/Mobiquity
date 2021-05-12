import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInfo } from 'src/models/cityInfo.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast';
  API_ID = '3d8b309701a13f65b660fa2c64cdc517';
  cityInfo: CityInfo[] = [];
  
  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any>{ 
    let params = new HttpParams();
    params = params.append('q', city);
    params = params.append('appid', this.API_ID);
    return this.http.get(this.WEATHER_URL, {params: params});
  }

  getForecaseData(city: string): Observable<any>{ 
    let params = new HttpParams();
    params = params.append('q', city);
    params = params.append('appid', this.API_ID);
    return this.http.get(this.FORECAST_URL, {params: params});
  }
}
