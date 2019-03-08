import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ContactCoordinatorComponent } from './contact-coordinator/contact-coordinator.component';
import { DanaRosterComponent } from './dana-roster/dana-roster.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NishCalendarModule } from './nish-calendar/nish-calendar-module';

@NgModule({
  declarations: [AppComponent, LoginComponent, ContactCoordinatorComponent, DanaRosterComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    NishCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
