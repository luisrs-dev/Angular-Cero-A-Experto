import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 45;
  public showSection:boolean = false;

  getCapitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} edad ${this.age}`;
  }

  changeHero():void{
    // throw "Método no implementado";
    this.name = "Luis Reyes";
  }

  changeAge():void{
    this.age = 34;
  }

  resetForm():void{
    this.name = "Spiderman";
    this.age = 45;
  }

}
