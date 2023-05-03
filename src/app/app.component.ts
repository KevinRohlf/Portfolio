import { Component } from '@angular/core';
import { CurrentSectionService } from './current-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public handleSection: CurrentSectionService){}
}
