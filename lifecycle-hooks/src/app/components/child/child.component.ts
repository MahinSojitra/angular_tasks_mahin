import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() counter: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called.');
  }

  ngOnDestroy() {
    console.log('Child component destroyed.');
  }

  ngDoCheck() {
    console.log('ngDoCheck called.');
  }

}
