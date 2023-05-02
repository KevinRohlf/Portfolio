import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive ({
  selector: '[appscrollspy]'
})
export class ScrollspyComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset;
    const elements = this.el.nativeElement.querySelectorAll('section');
    elements.forEach((el: any) => {
      if (this.isElementInViewport(el)) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  private isElementInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
  }
}
