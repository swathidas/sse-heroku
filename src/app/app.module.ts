import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './component/button.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
