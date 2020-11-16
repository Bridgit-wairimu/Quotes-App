import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighquote]'
})
export class HighlighquoteDirective {

  constructor(private elem:ElementRef) {}

    @HostListener("click") onClicks(){
      this.textDeco("line-through")
    }

   @HostListener("dblclick") onDoubleClicks(){
     this.textDeco("green")

    }

    private textDeco(action: string){
      this.elem.nativeElement.style.textDecoration=action;
    }
}
