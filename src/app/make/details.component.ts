import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public makesDto!: MakeDto;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      this.http.get<MakeDto>(environment.baseUrl + `api/Makes/Makesdetails/${idParam}`).subscribe(result => {
          this.makesDto = result;
      }, error => console.error(error));
    }
  }
}

export interface MakeDto {
  id: number,
  name: string;
  country: string;
  description: string;
  sumsales: number;
  countingNum: number;
}