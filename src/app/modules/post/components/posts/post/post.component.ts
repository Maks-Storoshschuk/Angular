import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HideButtonService} from "../../../../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:IPost;
  currentButton:number;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private hideButtonService: HideButtonService
  ) { }

  ngOnInit(): void {
  }

  navTo(){
    this.router.navigate([this.post.id],{relativeTo: this.activatedRoute})
    this.hideButtonService.getCurrentButton().subscribe(value => this.currentButton = value)
    this.hideButtonService.setCurrentButton(this.post.id);
  }
}
