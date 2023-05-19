import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})

export class MakeComponent  implements OnInit {
  public makes!: Make[];
  showFlag: boolean = false;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.showFlag = localStorage.getItem(environment.roleKey) == environment.role;
  }
  ngOnInit(): void {


    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      let urlOrigin = environment.baseUrl + `api/Makes/${idParam}`;
      this.http.delete<Make>(urlOrigin).subscribe(result => {
        // this.make = result;
        // this.form.patchValue(this.make);
      });
    }

      
      this.http.get<Make[]>(environment.baseUrl + 'api/Makes').subscribe(result => {
          this.makes = result;
      }, error => console.error(error));
  }
}

export interface Make {
  id: number,
  name: string;
  country: string;
  description: string;
}