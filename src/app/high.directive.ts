import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor='yellow'
  }


}
