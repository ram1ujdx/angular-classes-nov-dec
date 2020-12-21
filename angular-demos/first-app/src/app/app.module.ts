import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppGreenifyDirective } from './app-greenify.directive';
import { AppCheckDirective } from './app-check.directive';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EpmloyeeReactiveComponent } from './epmloyee-reactive/epmloyee-reactive.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmailPipe } from './email.pipe';
import { GithubClientComponent } from './github-client/github-client.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AppGreenifyDirective,
    AppCheckDirective,
    AddEmployeeComponent,
    EpmloyeeReactiveComponent,
    ViewEmployeesComponent,
    ErrorPageComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    EmailPipe,
    GithubClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
