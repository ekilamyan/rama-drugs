import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './shared/services/side-nav.service';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatSidenav, 
    MatSidenavModule, 
    MatIcon,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rama-drugs';

  isOpen = false;

  @ViewChild('sideNav') sideNav!: MatSidenav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sidenavService: SideNavService) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sideNav);
  }

  scrollToView(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    this.sidenavService.close();
  }
}
