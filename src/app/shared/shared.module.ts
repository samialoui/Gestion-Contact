import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {NgxPermissionsModule} from 'ngx-permissions';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild()
  ],
  exports: [
    NgxPermissionsModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    KeyFilterModule
  ]
})
export class SharedModule { }
