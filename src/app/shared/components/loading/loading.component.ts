import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../app.broadcast';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { sharedData } from '../../app.shareddata';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  @Input() showflag?: boolean = true;

  visibilityvalue: string = 'hidden';

  constructor(private router: Router, private MessageService: MessageService, private _sharedData: sharedData) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._sharedData.setisNavigationEnded(false);
        this.showloading();
        console.log("event started")
      }
    });
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        window.scrollTo(0,0)
        this._sharedData.setisNavigationEnded(true);
        if (this._sharedData.gethttpPengindRequest() == 0) {
          this.hideloading();
        }
        console.log("event end")
      }
    });

  }

  ngOnInit() {
    this.MessageService.subscribe("showloading", this.showloading)
    this.MessageService.subscribe("hideloading", this.hideloading)
  }

  showloading = () => {
    console.log("showloading")
    //$("body").addClass("app-noscroll");
    this.visibilityvalue =  'visible';
  }

  hideloading = () => {
    console.log("hideloading")
    //$("body").removeClass("app-noscroll");
    this.visibilityvalue =  'hidden';
  }
}