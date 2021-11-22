import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HideButtonService, UserService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  className:string;
  currentButton:number;

  @Output()
  userName = new EventEmitter<string>();


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private hideButton: HideButtonService
  ) {
  }

  ngOnInit(): void {
  }

  navTo() {

    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }

  lift() {
    this.userName.emit(this.user.name)
    console.log()
    // this.userId.subscribe(value=>this.id = value)
  }

  showButt() {
    this.hideButton.getCurrentButton().subscribe(value => this.currentButton = value)
    this.hideButton.setCurrentButton(this.user.id);
  }
}
