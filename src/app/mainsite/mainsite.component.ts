import { Component} from '@angular/core';
import { CurrentSectionService } from '../current-section.service';
@Component({
  selector: 'app-mainsite',
  templateUrl: './mainsite.component.html',
  styleUrls: ['./mainsite.component.scss']
})
export class MainsiteComponent {
  constructor(public handleSection: CurrentSectionService){

  }
  

  onSectionChange(sectionId: string) {
    this.handleSection.currentSection = sectionId;
  }
}
