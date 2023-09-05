import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nameBase: string = 'ironman';
  public ageBase: number = 45;

  public name: string = this.nameBase;
  public age: number = this.ageBase;

  public nameNew: string = 'Spiderman';
  public ageNew: number = 15;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

   getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

changeHero():void{
  this.name =  this.nameNew;
}


changeAge():void{
  this.age =   this.ageNew;
}

reset():void{
  this.name =  this.nameBase;
  this.age =   this.ageBase;
  //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
  //document.querySelectorAll('h1')!.forEach( element =>{     element.innerHTML = '<h1>Desde Angular</h1>';   })



}


}
