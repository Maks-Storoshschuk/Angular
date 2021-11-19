import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule} from "@angular/router";
import {CommentComponent} from './components/comment/comment.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserResolveService} from './services/user-resolve.service'
import {PostResolveService} from "./services/post-resolve.service";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import {CommentResolveService} from "./services/comment-resolve.service";

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
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
