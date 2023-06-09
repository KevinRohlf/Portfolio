import { Component } from '@angular/core';

@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss']
})
export class IAmComponent {
  public scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}
