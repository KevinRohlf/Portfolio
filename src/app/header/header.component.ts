import { Component, HostListener, OnInit, Output } from '@angular/core';
import AOS from 'aos';
import { CurrentSectionService } from '../current-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  section: string;
  // @Output() menuOpen: boolean = false;

  constructor(public menuOpen: CurrentSectionService) {}

  ngOnInit(): void {
    AOS.init()
  }

  public scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }


  @HostListener('window:scroll', ['$event'])

  defineSection() {
    let startScreen: any = document.getElementById('i-am')?.offsetTop;
    let aboutMe: any = document.getElementById('aboutme')?.offsetTop;
    let mySkills: any = document.getElementById('skills')?.offsetTop;
    let portfolio: any = document.getElementById('portfolio')?.offsetTop;

    let section1: number = startScreen + window.innerHeight / 2;
    let section2: number = startScreen + aboutMe + window.innerHeight / 2;
    let section3: number = startScreen + aboutMe + mySkills - window.innerHeight / 2;
    let section4: number = startScreen + aboutMe + mySkills + portfolio - window.innerHeight;

    this.checkSection(section1, section2, section3, section4);
  }


  checkSection(section1: number, section2: number, section3: number, section4: number) {
    if (window.pageYOffset < section1) {
      this.section = '';
    }
    if (window.pageYOffset > section1) {
      this.section = 'aboutme';
    }
    if (window.pageYOffset > section2) {
      this.section = 'skills';
    }
    if (window.pageYOffset > section3) {
      this.section = 'portfolio';
    }
    if (window.pageYOffset > section4) {
      this.section = '';
    }
  }

  openMenu() {
    this.menuOpen.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen.menuOpen = false;
  }
}
