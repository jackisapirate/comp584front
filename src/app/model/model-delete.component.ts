import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/res/response';
import { Model } from './model.component';

@Component({
  selector: 'app-model-delete',
  templateUrl: './model-delete.component.html',
  styleUrls: ['./model-delete.component.css']
})
export class ModelDeleteComponent {
  apiresponse?: ApiResponse;


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      let urlOrigin = environment.baseUrl + `api/Models/${idParam}`;
      this.http.delete<ApiResponse>(urlOrigin).subscribe(result => {
        // this.model = result;
        // this.form.patchValue(this.model);
        this.apiresponse = result;
        if(this.apiresponse.status != 200){
          alert(this.apiresponse.message);
        }
      });
    }
    setTimeout(() => {
      this.router.navigate(['/model']);
    }, 300);

  }
}
