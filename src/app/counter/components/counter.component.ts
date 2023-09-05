import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
</h3>

<button (click)="increaseBy(-1)">-1</button>
<button (click)="increaseBy(0)">Reset</button>
<button (click)="increaseBy(1)">+1</button>

  `
})

export class CounterComponent  {
  constructor() { }

  public counter : number = 10;
  public counterInicial : number = 10;

  increaseBy(value:number):void{

    if(value==0){
      this.counter = this.counterInicial;
    }else{
      this.counter += value;
    }
  }

}

