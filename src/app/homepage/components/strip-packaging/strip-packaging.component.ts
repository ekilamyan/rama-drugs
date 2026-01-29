import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-strip-packaging',
  templateUrl: './strip-packaging.component.html',
  styleUrl: './strip-packaging.component.scss'
})
export class StripPackagingComponent implements AfterViewInit {

  @ViewChild('content') contentRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements =
      this.contentRef.nativeElement.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.5,        // Wait until 50% of element is visible
        rootMargin: '0px 0px -10% 0px' // optional offset, can tweak
      }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }
}