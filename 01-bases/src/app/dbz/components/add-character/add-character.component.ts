import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacterHijo: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger;
    if(this.character.name.length === 0) return;
    this.onNewCharacterHijo.emit({...this.character});
    // this.character.name = '';
   // this.character.power = 0;
    this.character = {name:'', power:0};
  }
}
