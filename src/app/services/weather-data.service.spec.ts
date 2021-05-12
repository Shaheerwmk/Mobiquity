import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherDataService } from './weather-data.service';

const cityInfo = {
  "coord": {
    "lon": -85.1647,
    "lat": 34.257
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 284.3,
    "feels_like": 283.98,
    "temp_min": 282.46,
    "temp_max": 285.9,
    "pressure": 1021,
    "humidity": 96
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.38,
    "deg": 4,
    "gust": 8.86
  },
  "clouds": {
    "all": 90
  },
  "dt": 1620828974,
  "sys": {
    "type": 2,
    "id": 2038061,
    "country": "US",
    "sunrise": 1620816049,
    "sunset": 1620865999
  },
  "timezone": -14400,
  "id": 4219762,
  "name": "Rome",
  "cod": 200
}

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherDataService]
    });
  });

  it('should be initialized',
    inject([WeatherDataService], (weatherDataService: WeatherDataService) => {
      expect(WeatherDataService).toBeTruthy();
    }));

  it(
    'should call getWeatherData and get 200 response',
    fakeAsync(
      inject(
        [WeatherDataService, HttpTestingController],
        (weatherDataService: WeatherDataService, backend: HttpTestingController) => {
          const url = 'http://api.openweathermap.org/data/2.5/weather';
          const responseObject = cityInfo;
          let response: any = null;
          weatherDataService.getWeatherData('Rome').subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
              const requestWrapper = backend.expectOne({ url: 'http://api.openweathermap.org/data/2.5/weather?q=Rome&appid=3d8b309701a13f65b660fa2c64cdc517' });
              requestWrapper.flush(responseObject);

              expect(requestWrapper.request.method).toEqual('GET');
              expect(response.body).toEqual(responseObject);
              expect(response.status).toBe(200);
            },
            (error: any) => { }
          );
        })
    )
  );

  it(
    'should call getForecastData and get 200 response',
    fakeAsync(
      inject(
        [WeatherDataService, HttpTestingController],
        (weatherDataService: WeatherDataService, backend: HttpTestingController) => {
          const url = 'http://api.openweathermap.org/data/2.5/forecast';
          const responseObject = cityInfo;
          let response: any = null;
          weatherDataService.getForecastData('Rome').subscribe(
            (receivedResponse: any) => {
              response = receivedResponse;
              const requestWrapper = backend.expectOne({ url: 'http://api.openweathermap.org/data/2.5/forecast?q=Rome&appid=3d8b309701a13f65b660fa2c64cdc517' });
              requestWrapper.flush(responseObject);

              expect(requestWrapper.request.method).toEqual('GET');
              expect(response.body).toEqual(responseObject);
              expect(response.status).toBe(200);
            },
            (error: any) => { }
          );
        })
    )
  );
});
