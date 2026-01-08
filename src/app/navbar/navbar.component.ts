import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { SideNavService } from '../shared/services/side-nav.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Subscription, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public previousScrollTop = 0;
  public isNavbarVisible = true;
  public scrollThreshold = 5;
  public isOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private sidenavService: SideNavService
  ) {
  }

  ngOnInit(): void {
    const navBar = this.el.nativeElement.querySelector('.nav-bar-container');
    this.renderer.setStyle(navBar, 'background-color', 'transparent');
    this.renderer.setStyle(navBar, 'backdrop-filter', 'none');
    this.renderer.setStyle(navBar, 'box-shadow', 'none');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollTop = Math.max(0, window.pageYOffset || this.document.documentElement.scrollTop);
    const navBar = this.el.nativeElement.querySelector('.nav-bar-container');

    // --- Force navbar to show at top ---
    if (currentScrollTop <= 0) {
      this.renderer.setStyle(navBar, 'transform', 'translateY(0)');
      this.isNavbarVisible = true;

      // Transparent styling when at top
      this.renderer.setStyle(navBar, 'background-color', 'transparent');
      this.renderer.setStyle(navBar, 'backdrop-filter', 'none');
      this.renderer.setStyle(navBar, 'box-shadow', 'none');
      this.renderer.setStyle(navBar, 'transition', 'all 0.3s ease');

      this.previousScrollTop = 0;
      return; // stop further logic
    }

    // --- Styling changes after top ---
    if (currentScrollTop < 100) {
      this.renderer.setStyle(navBar, 'background-color', 'transparent');
      this.renderer.setStyle(navBar, 'backdrop-filter', 'none');
      this.renderer.setStyle(navBar, 'box-shadow', 'none');
    } else {
      this.renderer.setStyle(navBar, 'backdrop-filter', 'blur(15px)');
      this.renderer.setStyle(navBar, 'background-color', 'rgba(33, 33, 33, 0.522)');
      this.renderer.setStyle(navBar, 'box-shadow', '0px 25px 50px -38px #000000');
    }
    this.renderer.setStyle(navBar, 'transition', 'all 0.3s ease');

    // --- Detect scroll direction ---
    const delta = currentScrollTop - this.previousScrollTop;
    if (Math.abs(delta) > this.scrollThreshold) {
      if (delta > 0 && this.isNavbarVisible) {
        // Scrolling down → hide
        this.renderer.setStyle(navBar, 'transform', 'translateY(-100%)');
        this.isNavbarVisible = false;
      } else if (delta < 0 && !this.isNavbarVisible) {
        // Scrolling up → show
        this.renderer.setStyle(navBar, 'transform', 'translateY(0)');
        this.isNavbarVisible = true;
      }
    }

    this.previousScrollTop = currentScrollTop;
  }

  public onMenuClick() {
    this.sidenavService.open();
  }

}