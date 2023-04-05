import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  
  public car: Car = {
    id: "",
    name: "",
    year: "",
    price: 0,
    color: "",
    modelId: 1,

  };
  baseUrl = 'https://localhost:7104/api/';
  constructor(http: HttpClient) {
      http.get<Car>(this.baseUrl + 'Cars/4').subscribe(result => {
          this.car = result;
      }, error => console.error(error));
  }
}

export interface Car {
  id: string;
  name: string;
  year: string;
  price: number;
  color: string;
  modelId: number;
}