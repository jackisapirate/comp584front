import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Model} from './model.component';
import { ModelComponent } from './model.component';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent {
  model?: Model;
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        sales: new FormControl(''),
        description: new FormControl(''),
      }
    );

    this.loadData();
  }

  loadData(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/Models/${idParam}`;
    this.http.get<Model>(url).subscribe(result => {
      this.model = result;
      this.form.patchValue(this.model);
    });
  }

  onSubmit() {
    let model = this.model!;

    model.name = this.form.controls['name'].value;
    model.sales = this.form.controls['sales'].value;
    model.description = this.form.controls['description'].value;

    let url = environment.baseUrl + `api/Models/${model.id}`;
    console.log(model.id + model.name + model.sales);
    this.http.put<Model>(url, model).subscribe({
      next: () => {
        console.log(`Model ${model.name} was updated successfully`);
        this.router.navigate(['/model']);
      }
    });
  }
}
