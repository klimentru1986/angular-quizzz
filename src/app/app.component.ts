import { Component, OnInit } from '@angular/core';
import { QuizStoreService } from './services/quiz-store.service';
import { Question } from './models/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-quizzz';
  question$: Observable<Question>;

  constructor(private quizService: QuizStoreService) {}

  ngOnInit() {
    this.question$ = this.quizService.getActiveQuestion();
  }
}
