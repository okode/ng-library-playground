import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1Page } from './modules/page1/page1.page';
import { Page2Page } from './modules/page2/page2.page';

import { LibraryRoutingModule } from './library-ng10-routing.module';
import { LIBRARY_CONFIG, LibraryConfig } from './library-config';

@NgModule({
  declarations: [Page1Page, Page2Page],
  imports: [LibraryRoutingModule, CommonModule],
  exports: [Page1Page, Page2Page]
})
export class LibraryNg10Module {
  static forRoot(libraryConfig: LibraryConfig): ModuleWithProviders<LibraryNg10Module> {
    return {
      ngModule: LibraryNg10Module,
      providers: [
        { provide: LIBRARY_CONFIG, useValue: libraryConfig }
      ]
    };
  }
}
