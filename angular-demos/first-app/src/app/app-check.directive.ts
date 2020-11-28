import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class AppCheckDirective {

  @Input()
  set appCheck(value:string){
    if(value.length>10){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }



}
