import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishComponent implements OnInit {
  @Input()
  score: number;

  constructor() {}

  ngOnInit() {}
}
