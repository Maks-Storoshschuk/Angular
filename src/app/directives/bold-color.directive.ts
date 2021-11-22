import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBoldColor]'
})
export class BoldColorDirective implements OnInit {


  @Input('appBoldColor')
  color: string

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold'
    this.elementRef.nativeElement.style.fontSize = '40px'
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.color
  }

}
