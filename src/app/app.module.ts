import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";

import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserResolveService, PostResolveService, CommentResolveService} from './services'
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {CommentDetailComponent} from './components/comment-detail/comment-detail.component';
import {HomeComponent} from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  // {path:'',redirectTo:'posts',pathMatch:'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        // component: UsersComponent,canActivateChild:[TestGuard],canDeactivate:[TestGuard],
        component: UsersComponent,canActivate:[TestGuard],canDeactivate:[TestGuard],
        children: [
          {
            path: ':id',
            component: UserDetailComponent,
            resolve: {data: UserResolveService}
          },
        ]
      },

      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: ':id',
            component: PostDetailComponent,
            resolve: {data: PostResolveService}
          },
        ]
      },
      {
        path: 'comments',
        component: CommentsComponent,
        children: [
          {
            path: ':id',
            component: CommentDetailComponent,
            resolve: {data: CommentResolveService}
          },
        ]
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
    CommentsComponent,
    UserDetailComponent,
    PostDetailComponent,
    CommentDetailComponent,
    HomeComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
