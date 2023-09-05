


import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

console.log(uuid);

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters : Character[] = [

    {
      id:uuid(),
      name:'Krillin',
    power :1000
    },
    {id:uuid(),
      name:'Goku',
    power :9500
    },
    {
      id:uuid(),
      name:'Vegeta',
    power :9000
    },
  ];

  newCharacter(nuevocharacter: Character): void {

    const newCharacter: Character ={
      id:uuid(),
      ...nuevocharacter
    }
    //this.characters.unshift(nuevocharacter);
    //this.characters.push(nuevocharacter);
    this.characters.push(newCharacter);

    console.log('mainn');
    console.log(nuevocharacter);
    console.log(this.characters);
  }

  
  deleteCharacterById(  id: string): void {

    this.characters = this.characters.filter( Character => Character.id !== id);
    console.log('delete:: '+id);
    console.log(this.characters);
  }



/*
  deleteCharacter(  miId: number): void {

    this.characters.splice( miId,1);
    console.log('delete:: '+miId);
    console.log(this.characters);
  }
*/

}
