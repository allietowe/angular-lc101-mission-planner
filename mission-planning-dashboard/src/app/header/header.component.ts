import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  nasaPng: string = "https://www.pngfind.com/pngs/m/95-958022_nasa-sticker-hd-png-download.png";
  constructor() { }

  ngOnInit() {
  }

}
