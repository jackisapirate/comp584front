import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Make } from './make.component';
@Component({
  selector: 'app-make-delete',
  templateUrl: './make-delete.component.html',
  styleUrls: ['./make-delete.component.css']
})
export class MakeDeleteComponent {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      let urlOrigin = environment.baseUrl + `api/Makes/${idParam}`;
      this.http.delete<Make>(urlOrigin).subscribe(result => {
        // this.make = result;
        // this.form.patchValue(this.make);
      });
    }
    setTimeout(() => {
      this.router.navigate(['/make']);
    }, 300);

  }
}
