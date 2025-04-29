import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease, transform 0.2s ease');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHighlight();
  }

  private setHighlight() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      '0 4px 12px rgba(0, 0, 0, 0.15)'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(-4px)'
    );
  }

  private removeHighlight() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      'none'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(0)'
    );
  }
}
