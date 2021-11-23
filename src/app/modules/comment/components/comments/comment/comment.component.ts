import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HideButtonService} from "../../../../../services";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;
  currentButton: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hideButtonService: HideButtonService
  ) {
  }

  ngOnInit(): void {
  }

  navTo(){
    this.router.navigate([this.comment.id],{relativeTo: this.activatedRoute})
    this.hideButtonService.getCurrentButton().subscribe(value => this.currentButton = value)
    this.hideButtonService.setCurrentButton(this.comment.id);
  }

}
