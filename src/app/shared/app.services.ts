import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppUrls } from './app.constants';
import { sharedData } from './app.shareddata';
import { UtilsService } from './app.utils';
import { Messages } from './app.messages';


@Injectable()
export class appService {

  constructor(private http: Http, private _sharedData: sharedData, private _utilsService: UtilsService, public router: Router) { }

  /** to make HTTP call */
  postData(url, parameters) {
    console.log(parameters)
    let that = this;
    let HTTPmethod = AppUrls.URLs.isDevelopment ? "get" : "get"

    let headers: {
      'Content-Type': "application/json"
    }

    let sample = this.http[HTTPmethod](url, parameters, headers)
      .map(response => {
        console.log("pending no of requests", this._sharedData.gethttpPengindRequest())
        return response.json()
      })
    console.log(sample)
    return sample
  }

  /** Service to get iRobo session token */
  getRandomUser(parameters) {
    return this.postData(AppUrls.getpath(AppUrls.URLs.RANDOM_USER), parameters);
  }

  getGoogleNews(parameters) {
    return this.postData(AppUrls.getpath(AppUrls.URLs.GOOGLE_NEWS), parameters);
  }
} 
