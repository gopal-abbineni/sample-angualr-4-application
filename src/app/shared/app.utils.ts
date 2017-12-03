import { Injectable } from '@angular/core';
import { MessageService } from './app.broadcast';
import { Router } from '@angular/router';
import { sharedData } from './app.shareddata';

@Injectable()
export class UtilsService {

  constructor(public MessageService: MessageService,public _sharedData: sharedData,public router: Router) { }

  showloader() {
    this.MessageService.broadcast("showloading", {});
  }

  hideloader() {
    this.MessageService.broadcast("hideloading", {});
  }
}

