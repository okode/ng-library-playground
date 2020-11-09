import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page1Page } from './modules/page1/page1.page';
import { Page2Page } from './modules/page2/page2.page';

const routes = RouterModule.forChild([
  {
    path: '',
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
export class LibraryRoutingModule { }
