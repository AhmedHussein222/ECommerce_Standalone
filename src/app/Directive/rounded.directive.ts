import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective implements  OnInit , OnChanges {      //
@Input() color:string='black';

constructor(private el:ElementRef) { }

ngOnInit():void {
  this.el.nativeElement.style.borderRadius="20px";
  this.el.nativeElement.style.boxShadow=` 0 0  7px ${this.color}`;
}

ngOnChanges(): void {

    this.el.nativeElement.style.boxShadow=` 0 0 7px ${this.color}`;

  
}

@HostListener("mouseover") increase(){
  this.el.nativeElement.style.boxShadow=` 0 0  25px ${this.color}`;

}
@HostListener("mouseout") reset(){
  this.el.nativeElement.style.boxShadow=` 0 0  7px ${this.color}`;

}
}
