import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age = 25;
    // throw 'Metodo no implementado'
  }
  resetValues():void {
    this.age = 45;
    this.name = 'ironman';
  }
}
