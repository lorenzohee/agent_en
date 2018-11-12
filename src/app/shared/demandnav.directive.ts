import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDemandnav]'
})
export class DemandnavDirective {

  @Input('appDemandnav') highlightColor: string;
  
  constructor(private el: ElementRef) { }

   @HostListener('mouseenter') onmouseenter(){
     this.highlight(this.highlightColor || 'red');
   }

   @HostListener('mouseleave') onmouseleave(){
     this.highlight(null)
   }

   private highlight(color: string){
     this.el.nativeElement.style.backgroundColor = color;
   }

}
