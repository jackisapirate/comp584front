import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule} from '@angular/material/button';

// import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { CarComponent } from './car/car.component';
import { LoginComponent } from './auth/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CountryPopulationComponent } from './countries/country-population.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { MatInputModule } from "@angular/material/input";
import { MakeEditComponent } from './make/make-edit.component';
import { MakeAddComponent } from './make/make-add.component';
import { MakeDeleteComponent } from './make/make-delete.component';
import { DetailsComponent } from './make/details.component';
import { ModelEditComponent } from './model/model-edit.component';
import { ModelAddComponent } from './model/model-add.component';
import { ModelDeleteComponent } from './model/model-delete.component';
import { ModelDetailsComponent } from './model/model-details.component';

import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CareditComponent } from './car/caredit.component';
import { CardeleteComponent } from './car/cardelete.component';
import { CaraddComponent } from './car/caradd.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MakeComponent,
    ModelComponent,
    CarComponent,
    LoginComponent,
    CountriesComponent,
    CountryPopulationComponent,
    CountryEditComponent,
    MakeEditComponent,
    MakeAddComponent,
    MakeDeleteComponent,
    DetailsComponent,
    ModelEditComponent,
    ModelAddComponent,
    ModelDeleteComponent,
    ModelDetailsComponent,
    CareditComponent,
    CardeleteComponent,
    CaraddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
