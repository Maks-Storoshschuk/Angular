import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  className:string

  @Output()
  userName = new EventEmitter<string>();


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  navTo() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }

  lift() {
    this.userName.emit(this.user.name)
    this.className = 'hide'
    // this.userId.subscribe(value=>this.id = value)
  }
}
