import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAutoColor]'
})
export class AutoColorDirective implements OnChanges {
  @Input('appAutoColor') text: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      const baseColor = this.getColorBasedOnKeywords(this.text);
      const colorWithOpacity = this.applyOpacity(baseColor, 0.75);
      this.renderer.setStyle(this.el.nativeElement, 'background-color', colorWithOpacity);
    }
  }

  private getColorBasedOnKeywords(text: string): string {
    const keywordMap: { [keyword: string]: string } = {
      important: 'rgb(255, 107, 107)',
      urgent: 'rgb(255, 159, 67)',
      idea: 'rgb(95, 39, 205)',
      todo: 'rgb(29, 209, 161)',
      meeting: 'rgb(72, 219, 251)',
      work: 'rgb(87, 101, 116)',
      personal: 'rgb(254, 202, 87)',
      reminder: 'rgb(16, 172, 132)',
      project: 'rgb(0, 210, 211)',
      study: 'rgb(84, 160, 255)'
    };

    const lowerText = text.toLowerCase();
    for (const keyword in keywordMap) {
      if (lowerText.includes(keyword)) {
        return keywordMap[keyword];
      }
    }

    return 'rgb(255, 255, 255)';
  }

  private applyOpacity(color: string, opacity: number): string {
    return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
  }
}
