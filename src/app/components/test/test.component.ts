import {Component, OnInit} from '@angular/core';
import {IncrementPipe} from "../../pipes";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr2: number[];
  user = {name: 'Maks', age: 18};
  name = 'kokos';
  born = new Date(1996, 1, 23, 8, 56, 24);
  now = new Date()
  arr = [1, 2, 3, 4, 5]
  color = 'gray'

  constructor(private incrementPipe: IncrementPipe) {
  }

  ngOnInit(): void {
    this.arr2 = this.incrementPipe.transform(this.arr, 8);
  }

}
