import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]',
  standalone: true
})
export class BetterHightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') mouseover(eventData:Event){

    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
    this.backgroundColor = "blue";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor = "transparent"
    ///this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' )
  }


  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.backgroundColor = '';
  }

  ngOnInit() {
    this.backgroundColor = "blue";
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' )
  }

}
