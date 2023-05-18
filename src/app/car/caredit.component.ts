import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Car} from './car';
import { CarComponent } from './car.component';
@Component({
  selector: 'app-caredit',
  templateUrl: './caredit.component.html',
  styleUrls: ['./caredit.component.css']
})
export class CareditComponent {
  car?: Car;
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        year: new FormControl(''),
        price: new FormControl(''),
        color: new FormControl(''),
      }
    );

    this.loadData();
  }

  loadData(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/Cars/${idParam}`;
    this.http.get<Car>(url).subscribe(result => {
      this.car = result;
      this.form.patchValue(this.car);
    });
  }

  onSubmit() {
    let car = this.car!;

    car.name = this.form.controls['name'].value;
    car.price = this.form.controls['price'].value;
    car.year = this.form.controls['year'].value;
    car.color = this.form.controls['color'].value;


    let url = environment.baseUrl + `api/Cars/${car.id}`;

    this.http.put<Car>(url, car).subscribe({
      next: () => {
        console.log(`Car ${car.name} was updated successfully`);
        this.router.navigate(['/car']);
      }
    });
  }
}
