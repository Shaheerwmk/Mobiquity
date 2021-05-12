import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { WeatherDataService } from '../services/weather-data.service';
import { CityComponent } from './city.component';

const routerStub = {
  navigate: (url) => {}
} as Router

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let weatherServiceStub: WeatherDataService = {} as WeatherDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityComponent ],
      providers:[
        { provide: WeatherDataService, useValue: weatherServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    weatherServiceStub = fixture.debugElement.injector.get(WeatherDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
