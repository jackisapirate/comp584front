import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cardelete',
  templateUrl: './cardelete.component.html',
  styleUrls: ['./cardelete.component.css']
})
export class CardeleteComponent {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      let urlOrigin = environment.baseUrl + `api/Cars/${idParam}`;
      this.http.delete(urlOrigin).subscribe();
    }
    setTimeout(() => {
      this.router.navigate(['/car']);
    }, 300);

  }
}
