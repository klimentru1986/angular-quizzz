import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerComponent implements OnInit {
  @Input()
  answer: Answer;

  btnClass: string;
  private btnTypes = ['is-primary', 'is-success', 'is-warning'];

  constructor() {}

  ngOnInit() {
    this.btnClass = this.btnTypes[Math.floor(Math.random() * 3)];
  }
}
