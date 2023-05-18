import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Make} from './make.component';
import { MakeComponent } from './make.component';

@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})
export class MakeEditComponent {
  make?: Make;
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        country: new FormControl(''),
        description: new FormControl(''),
      }
    );

    this.loadData();
  }

  loadData(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/Makes/${idParam}`;
    this.http.get<Make>(url).subscribe(result => {
      this.make = result;
      this.form.patchValue(this.make);
    });
  }

  onSubmit() {
    let make = this.make!;

    make.name = this.form.controls['name'].value;
    make.country = this.form.controls['country'].value;
    make.description = this.form.controls['description'].value;

    let url = environment.baseUrl + `api/Makes/${make.id}`;

    this.http.put<Make>(url, make).subscribe({
      next: () => {
        console.log(`Country ${make.id} was updated successfully`);
        this.router.navigate(['/make']);
      }
    });
  }
}
