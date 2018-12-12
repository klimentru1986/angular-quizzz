import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswerComponent } from './components/answer/answer.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [AppComponent, AnswerComponent, ErrorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
