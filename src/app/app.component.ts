import { Component } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus-minus-ng';
  display = 0;

  minus() {
    this.display--;
  }

  plus() {
    this.display++;
  }
}
