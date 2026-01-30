import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { StripPackagingComponent } from './components/strip-packaging/strip-packaging.component';
import { LongTermCareComponent } from './components/long-term-care/long-term-care.component';
import { TeamComponent } from './components/team/team.component';
import { SideNavService } from '../shared/services/side-nav.service';

@Component({
  selector: 'app-homepage',
  imports: [
    StripPackagingComponent,
    LongTermCareComponent,
    TeamComponent,
    FooterComponent,
    MatIcon,
    NavbarComponent,
    ServicesComponent,
    IntroComponent,
    ContactUsComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private sidenavService: SideNavService,) { }


  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay was blocked — browser policy
    });
  }

  ScrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}