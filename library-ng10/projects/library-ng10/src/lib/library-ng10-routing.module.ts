import { NgModule, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Page1Page } from './modules/page1/page1.page';
import { Page2Page } from './modules/page2/page2.page';

import { LibraryConfig, LIBRARY_CONFIG } from './library-config';

const routes = RouterModule.forChild([
  {
    path: 'lib-sinisters',
    children: [
      {
        path: 'page1',
        component: Page1Page
      },
      {
        path: 'page2',
        component: Page2Page
      }
    ]
  }
]);

@NgModule({
  imports: [routes],
  exports: [RouterModule]
})
export class LibraryRoutingModule {
  libraryConfig: LibraryConfig;

  constructor(@Inject(LIBRARY_CONFIG) config: LibraryConfig = null, private router: Router) {
    this.libraryConfig = config;
    if (this.libraryConfig.routesPrefix) {
      const index = this.router.config.findIndex((element) => element.path === 'lib-sinisters');
      this.router.config[index].path = this.libraryConfig.routesPrefix;
    }
  }
}
