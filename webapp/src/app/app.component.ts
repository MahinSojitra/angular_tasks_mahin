import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  titleData: string = "WebApp";


  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  changeColor() {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.transition = 'background-color 1.5s';
  }
}
