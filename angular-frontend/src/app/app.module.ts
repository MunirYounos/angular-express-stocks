import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { AuthWatch } from './watchdog/auth.watch';
//import { StocksOrderDate } from './components/stocks/stocksOrderDate.pipe';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'stocks', component: StocksComponent, canActivate:[AuthWatch]},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthWatch]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    StocksComponent,
    //StocksOrderDate

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()

  ],
  providers: [ValidateService, AuthService, AuthWatch],
  bootstrap: [AppComponent]
})
export class AppModule { }
