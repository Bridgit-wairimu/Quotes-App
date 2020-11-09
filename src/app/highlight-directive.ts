
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})

export class HighlightDirective {
  textDeco: any;

  constructor(private elem:ElementRef) { 
  }

  @HostListener("click") onClicks(){
    this.textDeco("green")
  }
}
