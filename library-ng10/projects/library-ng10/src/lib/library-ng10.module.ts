import { NgModule } from '@angular/core';
import { LibraryNg10Component } from './library-ng10.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LibraryNg10Component],
  imports: [
    HttpClientModule
  ],
  exports: [LibraryNg10Component]
})
export class LibraryNg10Module { }
