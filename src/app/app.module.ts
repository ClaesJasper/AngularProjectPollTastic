import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security/security.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { PollComponent } from './poll/poll.component';
import { AnswerComponent } from './answer/answer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'info', component: InfoComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'poll', component: PollComponent },
  { path: 'answer', component: AnswerComponent }


];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    SecurityComponent,
    DashboardComponent,
    RegisterComponent,
    PollComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
