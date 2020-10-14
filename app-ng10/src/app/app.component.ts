import { Component } from '@angular/core';
import { LibraryNg10Service } from 'library-ng10';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app-ng10';

  constructor(private libService: LibraryNg10Service) {}

  async clickGreeting() {
    alert(await this.libService.greeting('John').toPromise());
  }

}
