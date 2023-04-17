import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [


  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'make', component: MakeComponent },
  { path: 'model', component: ModelComponent },
  { path: 'car', component: CarComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
