import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IComment} from "../../../interfaces";
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment> {

  constructor(private commentService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    return this.commentService.getComment(+route.params['id']);
  }
}
