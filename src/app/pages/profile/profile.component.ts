import { Endereco } from 'src/app/model/Participante';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Participante } from 'src/app/model/Participante';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Participante | undefined;
  userId = 1
  constructor(private profileService: ProfileService, private authService: AuthService) { }


  ngOnInit(): void {
    // Obtém o ID do participante do serviço de autenticação
    if (this.userId) {
      this.getProfileData();
    }
  }

  getProfileData(): void {
    if (this.userId) {
      this.profileService.getProfile(this.userId).subscribe({
        next: (data: Participante) => {
          this.user = data;
        },
        error: (error: any) => {
          console.error('Erro ao obter os dados do perfil:', error);
        }
      });
    }
  }
}