import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:Post

  constructor(private activatedRoure:ActivatedRoute,
              private postService:PostService) {
    this.activatedRoure.data.subscribe(value => this.post = value['data'])
  }

  ngOnInit(): void {
  }

}
