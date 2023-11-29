import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]= [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Goku', power: 9500},
    {id: uuid(), name: 'Vegeta', power: 7500},
  ];

  addCharacter(character: Character):void {
    const old = this.characters
    const newCharacter:Character = {
      ...character,
      id: uuid()
    }

    this.characters = [...old, newCharacter]
  }

  removeCharacterByID(_id: string):void {
    this.characters = this.characters.filter( ({id}) => id !== _id)
  }

}
