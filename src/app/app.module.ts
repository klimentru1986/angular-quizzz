import { NgModule, ɵrenderComponent as renderComponent } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AnswerComponent } from './components/answer/answer.component';
import { ErrorComponent } from './components/error/error.component';
import { FinishComponent } from './components/finish/finish.component';
// import { QuizStoreService } from './services/quiz-store.service';

@NgModule({
  declarations: [AppComponent, AnswerComponent, ErrorComponent, FinishComponent]
})
export class AppModule {}

renderComponent(AppComponent);
