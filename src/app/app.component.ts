import { Component } from '@angular/core';
import { AppService } from './app.service';
import { PAGE } from '../section/config/config'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageName = PAGE;
  title = 'Neptune Ubicom';
  constructor(public appService:AppService) {

  }
}
