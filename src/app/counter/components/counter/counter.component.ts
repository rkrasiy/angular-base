import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <strong>Counter {{ counter }}</strong>
    <button (click)="incrementBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incrementBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  incrementBy(value: number): void {
    this.counter += value
  }

  resetCounter():void {
    this.counter = 10
  }

}
