import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/users/user-detail/user-detail.component";
import {UserResolveService} from "./services";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: {data: UserResolveService}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
