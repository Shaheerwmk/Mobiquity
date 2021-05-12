import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherDataService } from '../services/weather-data.service';
import { CityInfoComponent } from './city-info.component';

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

const activatedRouteStub = {
  snapshot:{
    params:{
      cityName: 'Rome'
    }
  }
}

const routerStub = {
  navigate: (url) => {}
} as Router

describe('CityInfoComponent', () => {
  let component: CityInfoComponent;
  let fixture: ComponentFixture<CityInfoComponent>;
  let weatherServiceStub: WeatherDataService = {} as WeatherDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityInfoComponent ],
      providers:[
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: WeatherDataService, useValue: weatherServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInfoComponent);
    component = fixture.componentInstance;
    weatherServiceStub = fixture.debugElement.injector.get(WeatherDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
