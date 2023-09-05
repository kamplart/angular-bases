import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelCharacter: EventEmitter<number> = new EventEmitter();



  @Input()
  public characterList: Character[] = [
    {name: 'Trunks',
    power: 8000}
  ];

  onDeleteId( index:number): void{
    this.onDelCharacter.emit(index);
  }


  onDelete( index:number): void{
    console.log('h '+index);
  }

}
