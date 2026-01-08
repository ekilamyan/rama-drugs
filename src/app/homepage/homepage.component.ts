import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [
    FooterComponent,
    MatIcon,
    NavbarComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor() {}
  
  ScrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}