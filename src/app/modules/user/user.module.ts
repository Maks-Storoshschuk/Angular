import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import {UserResolveService, UserService} from "./services";
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import {TransformatorPipe} from "../../pipes";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    TransformatorPipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers:[
    UserService,
    UserResolveService
  ],
  exports: [
    TransformatorPipe
  ],
})
export class UserModule { }
