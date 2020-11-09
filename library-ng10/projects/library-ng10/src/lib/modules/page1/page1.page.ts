import { Component, Inject } from '@angular/core';

import { LibraryConfig, LIBRARY_CONFIG } from '../../library-config';

@Component({
  selector: 'lib-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss']
})
export class Page1Page {
  libraryConfig: LibraryConfig;

  constructor(@Inject(LIBRARY_CONFIG) config: LibraryConfig = null) {
    this.libraryConfig = config;
  }
}
