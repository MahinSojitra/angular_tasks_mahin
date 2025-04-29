import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNoNotes]'
})
export class IfNoNotesDirective {
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  @Input() set appIfNoNotes(condition: boolean) {
    this.vcr.clear();
    if (condition) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
