import { Component, OnInit } from '@angular/core';
import { appService } from "../shared/app.services";
import { sharedData } from "../shared/app.shareddata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: any = {};

  constructor(public _sharedData: sharedData, public _appService: appService) { }

  ngOnInit() {
    this._sharedData.setactiveTab("home");
    this.getRandomData();
  }

  getRandomData = () => {
    this._appService.getRandomUser({}).subscribe((data) => {
      console.log(data);
      this.userData = data.results[0];
      console.log(this.userData);
     })
  }

  openURL = (url) => {
    window.open(url);
  }
}
