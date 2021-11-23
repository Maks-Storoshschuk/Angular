import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import {PostRoutingModule} from "./post-routing.module";
import {PostResolveService, PostService} from "./services";



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostService,
   PostResolveService,
  ]
})
export class PostModule { }
