import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Car} from './car';
import { Model } from '../model/model.component';
import { CarComponent } from './car.component';

@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css']
})
export class CaraddComponent {
  car?: Car;
  models?: Model[];
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(0),
        name: new FormControl(''),
        year: new FormControl(''),
        price: new FormControl(0),
        color: new FormControl(''),
        modelId: new FormControl(0),
      }
    );
    this.http.get<Model[]>(environment.baseUrl + 'api/Models').subscribe(result => {
      this.models = result;
  }, error => console.error(error));
  }


  onSubmit() {
    let car = this.car!;
    car = {
      id:0,
      name:"",
      year:"", 
      price:0,
      color: "",
      modelId: 0,
    }
    
    car.name = this.form.controls['name'].value;
    car.year = this.form.controls['year'].value;
    car.price = this.form.controls['price'].value;
    car.color = this.form.controls['color'].value;
    car.modelId = this.form.controls['modelId'].value;

    let url = environment.baseUrl + `api/Cars`;

    this.http.post<Car>(url, car).subscribe({
      next: () => {
        console.log(`New Car was updated successfully`);
        this.router.navigate(['/car']);
      }
    });
    setTimeout(() => {
      this.router.navigate(['/car']);
    }, 300);
  }
}
