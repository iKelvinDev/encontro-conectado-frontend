import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-authenticated',
  templateUrl: './navbar-authenticated.component.html',
  styleUrls: ['./navbar-authenticated.component.scss']
})
export class NavbarAuthenticatedComponent {

  constructor(private authService: AuthService, private router: Router) {}

  onlogoff() {
    this.authService.logoff();
    this.router.navigate(['/login']);
  }

}
