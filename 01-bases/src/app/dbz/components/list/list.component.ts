import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Por defecto',
      power: 0
    }
  ];

  @Output()
  public onDeleteListComponent: EventEmitter<string> = new EventEmitter();
  // public onDelete = new EventEmitter<number>;

  onDeleteCharacter(id:string):void{
    console.log({id});

    this.onDeleteListComponent.emit(id);

  }


}
