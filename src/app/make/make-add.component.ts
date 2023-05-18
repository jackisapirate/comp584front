import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import {Make} from './make.component';
import { MakeComponent } from './make.component';

@Component({
  selector: 'app-make-add',
  templateUrl: './make-add.component.html',
  styleUrls: ['./make-add.component.css']
})
export class MakeAddComponent {
  make?: Make;
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(0),
        name: new FormControl(''),
        country: new FormControl(''),
        description: new FormControl(''),
      }
    );


  }


  onSubmit() {
    let make = this.make!;
    make = {
      id:0,
      name:"",
      country:"", 
      description:"",
    }
    
    make.name = this.form.controls['name'].value;
    make.country = this.form.controls['country'].value;
    make.description = this.form.controls['description'].value;

    let url = environment.baseUrl + `api/Makes`;

    this.http.post<Make>(url, make).subscribe({
      next: () => {
        console.log(`New Make was updated successfully`);
        this.router.navigate(['/make']);
      }
    });

    setTimeout(() => {
      this.router.navigate(['/make']);
    }, 300);
  }
}
