import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [

  // 从后台粘贴过来的
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'make', component: MakeComponent },
  { path: 'model', component: ModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
