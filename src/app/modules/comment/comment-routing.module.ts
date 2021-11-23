import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentResolveService} from "./services/comment-resolve.service";
import {CommentDetailComponent} from "./components/comments/comment-detail/comment-detail.component";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    children: [
      {
        path: ':id',
        component: CommentDetailComponent,
        resolve: {data: CommentResolveService}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
