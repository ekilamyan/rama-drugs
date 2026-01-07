import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SideNavService } from '../shared/services/side-nav.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isOpen = false;

  constructor(private sidenavService: SideNavService) {}

  public onMenuClick() {
    this.sidenavService.open();
  }
}
