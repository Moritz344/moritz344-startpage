import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web',
  imports: [],
  templateUrl: './web.html',
  styleUrl: './web.css',
})
export class Web {
  @Input() name: string = "";
  @Input() link: string = "";
  @Input() icon: string = "";

  constructor() { }
}
