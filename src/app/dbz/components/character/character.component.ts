import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public moldeCharacter: Character = {
    name:'',
    power:0
  };

  emitCharacter(){
    //debugger;
    //console.log( this.character);
    if( this.moldeCharacter.name.length === 0) return;

    this.onNewCharacter.emit(this.moldeCharacter);
    this.moldeCharacter.name = '';
    this.moldeCharacter.power = 0;
  }
}
