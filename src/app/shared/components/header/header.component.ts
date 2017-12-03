import { Component, OnInit } from '@angular/core';
import { sharedData } from "../../app.shareddata";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _sharedData: sharedData) { }

  ngOnInit() {
  }

}
