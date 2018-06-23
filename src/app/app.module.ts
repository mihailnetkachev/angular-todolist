import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
