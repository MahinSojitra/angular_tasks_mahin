import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title: string = "";
  @Output() changeParentEvent = new EventEmitter();

  constructor(public router: Router) {}

  changeParent() {
    this.changeParentEvent.emit();
  }
}
