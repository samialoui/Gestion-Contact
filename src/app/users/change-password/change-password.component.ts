import { Component, OnInit } from '@angular/core';
import {PasswordRequest} from '../../shared/model/password-request';
import {UserService} from '../../shared/services/user.service';
import {MessageService} from 'primeng/api';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  password = new PasswordRequest();
  constructor(private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse( currentUser ? currentUser : '');
    this.password.id = user.id;
  }

  changerPassword(f: NgForm): void {

    this.userService.changePassword(this.password).subscribe(res => {
      if (res.success) {

        localStorage.clear();
        location.reload();
        this.messageService.add({
          severity: 'success',
          summary: res.message,
          detail: res.detail
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: res.message,
          detail: res.detail
        });
      }

    }, ex => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Opération non effectuée'
      });
      console.log(ex);
    });
  }
}
