import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle-hooks';

  counter: number = 0;

  constructor() {
    console.log('Constructor called.');
  }

  ngOnInit() {
    console.log('ngOnInit called.');
  }

  increment() {
    this.counter++;
  }

  onCounterClick() {
    this.increment();
  }
}
