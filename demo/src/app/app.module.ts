import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from "@auth0/angular-jwt";
import { Login1Component } from './login1/login1.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './services/Interceptor/httpInterceptor';
import { DatePipe } from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    AddComponent,
    EditComponent,
    ListComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
       // whitelistedDomains: ["localhost:44305"],
       // blacklistedRoutes: []
      }
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    ServiceWorkerModule.register('ngsw-worker.js',
     { enabled: environment.production,
       registrationStrategy: 'registerImmediately' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    UserService,DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
