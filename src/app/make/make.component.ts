import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent {
  
  public makes: Make[] = [];
  baseUrl = 'https://localhost:7046/';
  constructor(http: HttpClient) {
      http.get<Make[]>(this.baseUrl + 'Make').subscribe(result => {
          this.makes = result;
      }, error => console.error(error));
  }
}

interface Make {
  date: string;
  name: string;
}


export class FetchDataComponent {

  public forecasts: WeatherForecast[] = [];
  baseUrl = 'https://localhost:7046/';
  constructor(http: HttpClient) {
      http.get<WeatherForecast[]>(this.baseUrl + 'Weatherforecast').subscribe(result => {
          this.forecasts = result;
      }, error => console.error(error));


  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}