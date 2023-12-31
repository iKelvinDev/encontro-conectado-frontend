import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-authenticated',
  templateUrl: './navbar-authenticated.component.html',
  styleUrls: ['./navbar-authenticated.component.scss']
})
export class NavbarAuthenticatedComponent {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
