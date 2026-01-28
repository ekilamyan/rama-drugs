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

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const scrollTop =
  //     window.pageYOffset || this.document.documentElement.scrollTop;

  //   const content =
  //     this.el.nativeElement.querySelector('.content');

  //   if (scrollTop > 50) {
  //     this.renderer.addClass(content, 'scrolled');
  //   } else {
  //     this.renderer.removeClass(content, 'scrolled');
  //   }
  // }

  public onMenuClick() {
    this.sidenavService.open();
  }

}