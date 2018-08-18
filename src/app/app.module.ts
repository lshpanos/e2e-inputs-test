import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
