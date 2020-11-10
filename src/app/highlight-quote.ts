import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]'
})
export class HighlightQoute {

  constructor(private elem:ElementRef) { 
  }
  @HostListener("click") onClicks(){
    this.textDeco("yellow")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }

}