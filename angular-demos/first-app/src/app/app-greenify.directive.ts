import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreenify]'
})
export class AppGreenifyDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }

  @HostBinding('style.backgroundColor') 
  backgroundColor:string='white';


  @HostListener('mouseenter') 
  mouseOver(event:Event){
    this.backgroundColor='green';
  }

  @HostListener('mouseleave') 
  mouseOut(event:Event){
    this.backgroundColor='white';
  }


  ngOnInit(){
    //this.elementRef.nativeElement.style.backgroundColor='green';
  }

}
