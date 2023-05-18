import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './auth/login.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { MakeEditComponent } from './make/make-edit.component';
import { MakeAddComponent } from './make/make-add.component';
import { MakeDeleteComponent } from './make/make-delete.component';
import { DetailsComponent } from './make/details.component';

import { ModelEditComponent } from './model/model-edit.component';
import { ModelAddComponent } from './model/model-add.component';
import { ModelDeleteComponent } from './model/model-delete.component';
import { ModelDetailsComponent } from './model/model-details.component';

import { CareditComponent } from './car/caredit.component';
import { CardeleteComponent } from './car/cardelete.component';
import { CaraddComponent } from './car/caradd.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'make', component: MakeComponent },
  { path: 'model', component: ModelComponent },
  { path: 'car', component: CarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'country-population/:id', component: CountryPopulationComponent },
  { path: 'countryedit/:id', component: CountryEditComponent },
  { path: 'makeedit/:id', component: MakeEditComponent },
  { path: 'makeadd', component: MakeAddComponent },
  { path: 'makedelete/:id', component: MakeDeleteComponent },
  { path: 'makedetails/:id', component: DetailsComponent },

  { path: 'modeledit/:id', component: ModelEditComponent },
  { path: 'modeladd', component: ModelAddComponent },
  { path: 'modeldelete/:id', component: ModelDeleteComponent },
  { path: 'modeldetails/:id', component: ModelDetailsComponent },

  { path: 'caredit/:id', component: CareditComponent },
  { path: 'caradd', component: CaraddComponent },
  { path: 'cardelete/:id', component: CardeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
