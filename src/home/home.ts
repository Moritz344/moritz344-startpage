import { Component } from '@angular/core';
import { Web } from './web/web';

@Component({
  selector: 'app-home',
  imports: [Web],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  constructor() { }


}
