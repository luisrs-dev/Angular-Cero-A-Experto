import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(+1)">+</button>
    <button (click)="increaseBy(-1)">-</button>
    <button (click)="resetValue()">Reset</button>
  `
})
export class CounterComponent {
  public title: string = 'Counter Component';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetValue() {
    this.counter = 10;
  }
}
