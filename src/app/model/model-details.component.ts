import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent {
  public modelDto!: ModelDto;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      this.http.get<ModelDto>(environment.baseUrl + `api/Models/GetModelSub/${idParam}`).subscribe(result => {
          this.modelDto = result;
      }, error => console.error(error));
    }
  }
}

export interface ModelDto {
  id: number,
  name: string;
  sales: number;
  description: string;
  countingNum: number;
}
