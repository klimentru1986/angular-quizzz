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
  score$: Observable<number>;
  error$: Observable<boolean>;

  constructor(private quizService: QuizStoreService) {}

  ngOnInit() {
    this.question$ = this.quizService.getActiveQuestion();
    this.score$ = this.quizService.getScore();
    this.error$ = this.quizService.getError();
  }

  addAnswer(answer: Answer): void {
    this.quizService.addAnswer(answer);
  }
}
