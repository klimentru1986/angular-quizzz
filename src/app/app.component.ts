import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuizStoreService } from './services/quiz-store.service';
import { Question } from './models/question';
import { Observable } from 'rxjs';
import { Answer } from './models/answer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'angular-quizzz';
  question$: Observable<Question>;

  constructor(private quizService: QuizStoreService) {}

  ngOnInit() {
    this.question$ = this.quizService.getActiveQuestion();
  }

  addAnswer(answer: Answer): void {
    this.quizService.addAnswer(answer);
  }
}
