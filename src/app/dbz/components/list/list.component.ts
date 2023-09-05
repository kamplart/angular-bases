import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  //public onDelCharacter: EventEmitter<number> = new EventEmitter();
  public onDelCharacterString: EventEmitter<string> = new EventEmitter();



  @Input()
  public characterList: Character[] = [
    {name: 'Trunks',
    power: 8000}
  ];

  onDeleteCharacter( id?:string): void{
    if(!id) return;
    console.log(id);
    this.onDelCharacterString.emit(id);
    }




  onDelete( index:number): void{
    console.log('h '+index);
  }

}
