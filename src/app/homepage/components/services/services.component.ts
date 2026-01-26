import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Service } from '../../../shared/models/service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [
    MatIcon
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  public services: Service[] = [];
  public additionalServices: Service[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Select all animate-on-scroll elements in both containers
    const allElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.25 });

    // Observe each element in both services containers
    allElements.forEach((el: Element) => observer.observe(el));
  }
}
