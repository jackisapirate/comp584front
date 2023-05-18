import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  public models!: Model[];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {


    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      let urlOrigin = environment.baseUrl + `api/Models/${idParam}`;
      this.http.delete<Model>(urlOrigin).subscribe(result => {
        // this.model = result;
        // this.form.patchValue(this.model);
      });
    }

      
      this.http.get<Model[]>(environment.baseUrl + 'api/Models').subscribe(result => {
          this.models = result;
      }, error => console.error(error));
  }
}

export interface Model {
  id: number,
  name: string;
  sales: string;
  description: string;
  makeId: number;
}