import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services/comment.service";
import {CommentResolveService} from "./services/comment-resolve.service";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailComponent} from "./components/comments/comment-detail/comment-detail.component";
import {CommentComponent} from "./components/comments/comment/comment.component";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers:[
    CommentService,
    CommentResolveService
  ],
})
export class CommentModule { }
