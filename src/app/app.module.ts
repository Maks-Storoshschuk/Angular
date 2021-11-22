import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common'
import localUA from '@angular/common/locales/uk'


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
import {FormsComponent} from './components/forms/forms.component';
import {TestComponent} from './components/test/test.component';
import { IncrementPipe } from './pipes/increment.pipe';
import { BoldColorDirective } from './directives/bold-color.directive';
import { TransformatorPipe } from './pipes/transformator.pipe';

registerLocaleData(localUA, 'UA')

const routes: Route[] = [
  // {path:'',redirectTo:'posts',pathMatch:'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        // component: UsersComponent,canActivateChild:[TestGuard],canDeactivate:[TestGuard],
        component: UsersComponent, canActivate: [TestGuard], canDeactivate: [TestGuard],
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
    FormsComponent,
    TestComponent,
    IncrementPipe,
    BoldColorDirective,
    TransformatorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'UA'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
