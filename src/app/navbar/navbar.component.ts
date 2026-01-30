import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { SideNavService } from '../shared/services/side-nav.service';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs';
import { ScreenSizeService } from '../shared/services/screen-size-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isScrolled = false;
  public isHomeRoute = true;
  public screenWidth = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private sidenavService: SideNavService,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit(): void {
    const navBar = this.el.nativeElement.querySelector('.nav-bar-container');
    this.renderer.setStyle(navBar, 'background-color', 'transparent');
    this.renderer.setStyle(navBar, 'backdrop-filter', 'none');
    this.renderer.setStyle(navBar, 'box-shadow', 'none');

    this.screenSizeService.getScreenWidth().subscribe(width => {
      this.screenWidth = width;
    });

    // 🔥 Detect current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomeRoute = event.urlAfterRedirects === '/homepage';
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  public onMenuClick() {
    this.sidenavService.open();
  }
}