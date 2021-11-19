import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: IPost

  constructor(private activatedRoure: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoure.data.subscribe(value => this.post = value['data'])
  }

  ngOnInit(): void {
  }

}
