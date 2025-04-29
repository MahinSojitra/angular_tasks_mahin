import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSetAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
}
