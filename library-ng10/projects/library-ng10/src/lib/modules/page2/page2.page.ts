import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LibraryConfig, LIBRARY_CONFIG } from '../../library-config';

@Component({
  selector: 'lib-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss']
})
export class Page2Page {
  libraryConfig: LibraryConfig;

  constructor(
    @Inject(LIBRARY_CONFIG) config: LibraryConfig = null,
    private router: Router
  ) {
    this.libraryConfig = config;
  }

  onClick() {
    const event = new Event('library-event');
    dispatchEvent(event);
  }

  backToApp(): void {
    this.router.navigate(['/' + (this.libraryConfig.backPage || 'home' )]);
  }
}
