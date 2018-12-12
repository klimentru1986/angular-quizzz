import { Injectable } from '@angular/core';
import { QUIZ } from '../const/quiz.const';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizStoreService {
  private readonly quiz = QUIZ;
  private currentQuestionId;

  constructor() {}

  getNextQuestion(): Question {
    if (this.currentQuestionId === undefined) {
      this.currentQuestionId = 0;
    }

    this.currentQuestionId = this.currentQuestionId + 1;

    return this.quiz[this.currentQuestionId]
      ? this.quiz[this.currentQuestionId]
      : null;
  }
}
