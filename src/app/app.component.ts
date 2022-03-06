import {Component, OnInit} from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private permissionsService: NgxPermissionsService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();

    if (token && !jwtHelper.isTokenExpired(token)) {
      const decodedToken = jwtHelper.decodeToken(token);
      const roles = decodedToken.roles;
      this.permissionsService.loadPermissions(roles);
    }
  }

  logout(): void {
  localStorage.clear();
  location.reload();
  }
}
