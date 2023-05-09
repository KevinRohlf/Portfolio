import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
skills = ['Angular', 'Typescript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material Design']; 
@Input() currentSection;


ngOnInit() {
  AOS.init();
}
}
