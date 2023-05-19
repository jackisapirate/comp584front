import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Car } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {
  public cars: Car[] = [];
  showFlag: boolean = false;
  // localStorage.getItem(this.authService.roleKey);
  constructor(http: HttpClient) {
    this.showFlag = localStorage.getItem(environment.roleKey) == environment.role;
      http.get<Car[]>(environment.baseUrl + 'api/Cars').subscribe(result => {
          this.cars = result;
      }, error => console.error(error));
  }
}

