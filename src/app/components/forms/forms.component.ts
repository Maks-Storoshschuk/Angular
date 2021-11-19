import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {CommentService, PostService, UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user = {
    userName: 'Max',
    password: 1715
  }

  myForm: FormGroup;
  myForm2: FormGroup;
  myFormDZ: FormGroup;
  users:IUser[];
  userDetail:IUser;
  userInfo:IUser;
  userPost:IPost[];


  constructor(private userService:UserService,
              private postService:PostService) {
  }

  customValidator(control: AbstractControl): null | object {
    return control.value.includes('хуй') ? {achtung: 'Error'} : null
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(6), this.customValidator]),
      age: new FormControl(25)
    })
    this.myForm2 = new FormGroup({
      userId:new FormControl(1)
    })
    this.myFormDZ = new FormGroup({
      userId:new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value)
  }



  save(tref: HTMLFormElement) {
    console.log(tref['userName'].value)
    console.log(this.user);
  }

  save2() {
    console.log(this.myForm);
    console.log(this.myForm.controls['age'].value);
    console.log(this.myForm.getRawValue());
  }

  showDetails() {
    const id = this.myForm2.controls['userId'].value;
    this.userDetail = this.users[id-1]
  }

  userInfo2() {
    const id = this.myFormDZ.controls['userId'].value;
    this.userInfo = this.users[id-1]
  }

  userPost2() {
    const id = this.myFormDZ.controls['userId'].value;
    this.postService.getPost(`?userId=${id}`).subscribe(value => this.userPost = value)
  }
}
