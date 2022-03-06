import {Component, OnInit} from '@angular/core';
import {Users} from '../../shared/model/users.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new Users();

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.authService.login(this.user).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.router.navigate(['/users/list']);
      setInterval( () => location.reload(), 500);
    }, ex => {
      this.messageService.add({
        severity: 'error', summary: 'Erreur',
        detail: 'Merci de vérifier votre login ou mot de passe'
      });
      console.log(ex);
    });
  }

}
