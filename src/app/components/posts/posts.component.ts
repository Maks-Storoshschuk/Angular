import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {UserComponent} from "../user/user.component";
import {UsersComponent} from "../users/users.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []
  private userId: number = 2;

  constructor(private postService:PostService) {

  }

  ngOnInit(): void {
    this.postService.getPost(this.userId).subscribe(value=>this.posts = value)
  }

}
