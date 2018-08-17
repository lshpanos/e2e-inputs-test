import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { BasicInputElementsComponent } from './basic-input-elements/basic-input-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BasicInputElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
