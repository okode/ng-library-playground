import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibraryNg10Module } from 'library-ng10';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryNg10Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
