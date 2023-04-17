import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Car } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  public cars: Car[] = []
  // public car: Car = {
  //   id: "",
  //   name: "",
  //   year: "",
  //   price: 0,
  //   color: "",
  //   modelId: 1,

  // };
  baseUrl = 'https://localhost:7104/api/';

  constructor(http: HttpClient) {
      console.log("environment:");
      console.log(environment.baseUrl);

      http.get<Car[]>(environment.baseUrl + 'api/Cars').subscribe(result => {
          this.cars = result;
      }, error => console.error(error));
  }
}

