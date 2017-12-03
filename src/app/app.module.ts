import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule , Http, XHRBackend, RequestOptions} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule} from './shared/shared.module';

import { httpFactory } from "./shared/http.factory";
import { sharedData } from './shared/app.shareddata';
import { appService } from './shared/app.services';
import { Deferred } from './shared/app.deferred';
import { MessageService } from './shared/app.broadcast';
import { UtilsService } from "./shared/app.utils";
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
       sharedData,
       appService,
       MessageService,
       UtilsService,
       Deferred
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

	constructor() {}
}
