import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    // this.activatedRoute.params.subscribe(params => {
    //   let id = params['id'];
    //   userService.getUser(+id).subscribe(value => {
    //     this.user = value
    //   })
    // })
    this.activatedRoute.data.subscribe(value => this.user = value['data']);
  }

  ngOnInit(): void {
  }

}
