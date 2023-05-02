import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSection: string;

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
