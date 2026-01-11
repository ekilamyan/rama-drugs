import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { AcceptedInsurancesComponent } from "./components/accepted-insurances/accepted-insurances.component";
import { IntroComponent } from './components/intro/intro.component';
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { AdditionalServicesComponent } from "./components/additional-services/additional-services.component";

@Component({
  selector: 'app-homepage',
  imports: [
    FooterComponent,
    MatIcon,
    NavbarComponent,
    ServicesComponent,
    AcceptedInsurancesComponent,
    IntroComponent,
    ContactUsComponent,
    AdditionalServicesComponent
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