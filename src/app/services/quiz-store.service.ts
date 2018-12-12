import { Injectable } from '@angular/core';
import { QUIZ } from '../const/quiz.const';
import { Question } from '../models/question';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizStoreService {
  private currentQuestionId = 0;
  private activeQuestion$ = new BehaviorSubject(QUIZ[0]);

  constructor() {}

  getActiveQuestion(): Observable<Question> {
    return this.activeQuestion$;
  }

  nextQuestion(): void {
    this.currentQuestionId = this.currentQuestionId + 1;
    this.activeQuestion$.next(QUIZ[this.currentQuestionId]);
  }
}
