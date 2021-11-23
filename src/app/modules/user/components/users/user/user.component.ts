import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {IUser} from "../../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HideButtonService} from "../../../../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  user: IUser;
  currentButton: number;

  @Output()
  userName = new EventEmitter<string>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hideButtonService: HideButtonService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    }

  ngOnInit(): void {
  }

  navTo(){
    this.router.navigate([this.user.id],{relativeTo: this.activatedRoute})
    this.userName.emit(this.user.name)
    this.hideButtonService.getCurrentButton().subscribe(value => this.currentButton = value)
    this.hideButtonService.setCurrentButton(this.user.id);
  }
}
