import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  TuiButtonModule,
  TuiLabelModule,
  TuiRootModule,
} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  TuiAccordionModule, TuiInputNumberModule
} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    TuiAccordionModule,
    TuiInputNumberModule,
    TuiButtonModule,
    TuiLabelModule,
    TuiRootModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
