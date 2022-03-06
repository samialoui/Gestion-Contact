import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Users} from '../shared/model/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Users[];

  constructor(private userService: UserService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    }, ex => console.log(ex));
  }

  removeUser(id: number): void {

    this.confirmationService.confirm({
      message: 'Vous etes sur de supprimer...?',
      accept: () => {

        this.userService.delete(id).subscribe(res => {
          if (res.success) {
            this.getAll();
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
    });


  }
}
