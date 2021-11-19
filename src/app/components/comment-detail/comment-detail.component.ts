import {Component, OnInit} from '@angular/core';
import {Comment} from "../../models/Comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  comment: Comment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.data.subscribe(value => this.comment = value['data'])
  }

  ngOnInit(): void {
  }

}
