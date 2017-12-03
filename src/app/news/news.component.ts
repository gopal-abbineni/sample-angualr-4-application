import { Component, OnInit } from '@angular/core';
import { appService } from "../shared/app.services";
import { sharedData } from "../shared/app.shareddata";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles : any;

  constructor(public _sharedData: sharedData, public _appService: appService) { }

  ngOnInit() {
    this._sharedData.setactiveTab("news");
    this._appService.getGoogleNews({}).subscribe((data)=>{
      console.log(data);
      this.articles = data.articles;
    })
  }

  openURL = (url) => {
    window.open(url);
  }

}
