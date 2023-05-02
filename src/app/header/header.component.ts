import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() currentSection;
  public scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}
