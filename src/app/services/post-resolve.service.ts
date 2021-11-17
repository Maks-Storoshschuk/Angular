import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Post} from "../models/Post";
import {Observable} from "rxjs";
import {PostService} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return this.postService.getPost(+route.params['id']);
  }
}
