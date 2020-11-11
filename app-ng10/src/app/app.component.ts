import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor() {
    addEventListener('library-event', (event) => {
      console.log(event);
    });
  }
}
