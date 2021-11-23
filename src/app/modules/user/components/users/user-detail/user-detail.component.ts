import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:IUser;

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.data.subscribe(value => this.user = value['data']);

  }
  ngOnInit(): void {
  }

}
