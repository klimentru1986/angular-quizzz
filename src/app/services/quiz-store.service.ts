import { Injectable } from '@angular/core';
import { QUIZ } from '../const/quiz.const';
import { Question } from '../models/question';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizStoreService {
  private currentQuestionId = 0;
  private activeQuestion$: BehaviorSubject<Question> = new BehaviorSubject(
    QUIZ[0]
  );
  private score$: BehaviorSubject<number> = new BehaviorSubject(0);
  private error$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  getActiveQuestion(): Observable<Question> {
    return this.activeQuestion$;
  }

  getScore(): Observable<number> {
    return this.score$;
  }

  getError(): Observable<boolean> {
    return this.error$;
  }

  addAnswer(answer: Answer): void {
    if (answer.value === 'React') {
      this.error$.next(true);
    }

    if (answer.correct) {
      this.score$.next(this.score$.value + 1);
    }

    this.nextQuestion();
  }

  nextQuestion(): void {
    this.currentQuestionId = this.currentQuestionId + 1;
    this.activeQuestion$.next(QUIZ[this.currentQuestionId]);
  }
}
