import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-long-term-care',
  templateUrl: './long-term-care.component.html',
  styleUrl: './long-term-care.component.scss'
})
export class LongTermCareComponent implements AfterViewInit {

  @ViewChild('content') contentRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = this.contentRef.nativeElement.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.5, // 50% visible before animation
        rootMargin: '0px 0px -10% 0px' // optional offset
      }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }
}
