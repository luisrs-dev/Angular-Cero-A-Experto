import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  ngOnInit(){
    console.log(this.characters);

  }

  public characters: Character[] = [
    {
      id:uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id:uuid(),
      name: 'Gokú',
      power: 5000,
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 6000,
    },
    {
      id:uuid(),
      name: 'Maestro Roshi',
      power: 50000,
    }];

    addCharacter(character:Character):void{

      const newCharacter: Character = {...character, id: uuid()};
      this.characters.push(character);
    }

    onDeleteMain(index:number){
      this.characters.splice(index, 1);

    }

    deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !== id );
    }



}
