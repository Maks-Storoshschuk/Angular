import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostResolveService} from "./services";
import {PostDetailComponent} from "./components/posts/post-detail/post-detail.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: ':id',
        component: PostDetailComponent,
        resolve: {data: PostResolveService}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
