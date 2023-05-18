import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Model} from './model.component';
import { Make } from '../make/make.component';
import { ModelComponent } from './model.component';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent {
  model?: Model;
  makes?: Make[];
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(0),
        name: new FormControl(''),
        sales: new FormControl(''),
        description: new FormControl(''),
        makeId: new FormControl(0),
      }
    );
    console.log(this.form);

    this.http.get<Make[]>(environment.baseUrl + 'api/Makes').subscribe(result => {
      this.makes = result;
  }, error => console.error(error));
  }


  onSubmit() {
    let model = this.model!;
    model = {
      id:0,
      name:"",
      sales:"", 
      description:"",
      makeId: 0,
    }
    
    model.name = this.form.controls['name'].value;
    model.sales = this.form.controls['sales'].value;
    model.description = this.form.controls['description'].value;
    model.makeId = this.form.controls['makeId'].value;

    let url = environment.baseUrl + `api/Models`;

    this.http.post<Model>(url, model).subscribe({
      next: () => {
        console.log(`New Model was updated successfully`);
        this.router.navigate(['/model']);
      }
    });
    setTimeout(() => {
      this.router.navigate(['/model']);
    }, 300);
  }

}
