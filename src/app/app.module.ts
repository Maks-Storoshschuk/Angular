import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common'
import localUA from '@angular/common/locales/uk'


import {IncrementPipe} from './pipes';
import {BoldColorDirective} from './directives';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";

registerLocaleData(localUA, 'UA')

@NgModule({
  declarations: [
    AppComponent,
    IncrementPipe,
    BoldColorDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'UA'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
