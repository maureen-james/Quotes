import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighDirective {

  constructor(private elem:ElementRef) { 
     elem.nativeElement.style.backgroundColor='green'
  }


}
