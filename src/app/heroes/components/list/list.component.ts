import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public borrado?: string = '';

  public heroNamesBase: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'SheHulk' ];

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'SheHulk' ];

removeLastHero() : void{
  this.borrado   = this.heroNames.pop();
}

resetHero() : void{

  this.heroNames = this.heroNamesBase;

  console.log(this.heroNamesBase);
  console.log(this.heroNames);
}

}
