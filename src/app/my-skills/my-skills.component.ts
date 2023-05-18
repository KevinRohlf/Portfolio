import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material Design'];


  ngOnInit() {
    AOS.init();
  }

  public scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}
