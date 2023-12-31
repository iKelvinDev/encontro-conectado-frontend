import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  endereco: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
    this.getAddressData();
  }

  getUserData(): void {
    this.userService.getUserData().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  getAddressData(): void {
    this.userService.getAddressData().subscribe({
      next: (data) => {
        this.endereco = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}