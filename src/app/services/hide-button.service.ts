import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HideButtonService {
  private button = new BehaviorSubject<number>(0)

  constructor() {

  }

  getCurrentButton(): BehaviorSubject<number>{
    return this.button
  }

  setCurrentButton(value:number):void{
    this.button.next(value)
  }

}
