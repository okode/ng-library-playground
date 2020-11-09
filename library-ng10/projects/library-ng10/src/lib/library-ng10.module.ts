import { NgModule } from '@angular/core';

import { LibraryRoutingModule } from './library-ng10-routing.module';

import { Page1Page } from './modules/page1/page1.page';
import { Page2Page } from './modules/page2/page2.page';

@NgModule({
  declarations: [Page1Page, Page2Page],
  imports: [LibraryRoutingModule],
  exports: [Page1Page, Page2Page]
})
export class LibraryNg10Module { }
