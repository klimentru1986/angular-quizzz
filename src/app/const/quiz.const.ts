import { Question } from '../models/question';


export const QUIZ: Question[] = [
  {
    value: 'select language',
    answers: [
      {
        value: 'typeScript',
        correct: true
      },
      {
        value: 'javaScript',
        correct: false
      },
      {
        value: 'coffeeScript',
        correct: false
      }
    ]
  },
  {
    value: 'select framework',
    answers: [
      {
        value: 'React',
        correct: false
      },
      {
        value: 'Angular',
        correct: true
      },
      {
        value: 'Vue',
        correct: false
      }
    ]
  },
  {
    value: 'select state management',
    answers: [
      {
        value: 'NgRx',
        correct: true
      },
      {
        value: 'NgXs',
        correct: true
      },
      {
        value: 'Akita',
        correct: true
      }
    ]
  }
];
