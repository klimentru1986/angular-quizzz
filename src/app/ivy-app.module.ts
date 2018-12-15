import {
  Component,
  NgModule,
  Injectable,
  ɵrenderComponent as renderComponent,
  ɵmarkDirty as markDirty
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  generateRandom(): number {
    return Math.floor(Math.random() * 1000);
  }
}

@Component({
  selector: 'app-root',
  template: `
    <div class="title">{{ title }}</div>
    <div>{{ random }}</div>
    <button (click)="generateRandom()">generate random</button>
  `
})
export class IvyAppComponent {
  title = 'ivy app';
  random = 0;

  constructor(private randomService: RandomService) {}

  generateRandom() {
    this.random = this.randomService.generateRandom();
    markDirty(this);
  }
}

@NgModule({
  declarations: [IvyAppComponent]
})
export class IvyAppModule {}

renderComponent(IvyAppComponent);
