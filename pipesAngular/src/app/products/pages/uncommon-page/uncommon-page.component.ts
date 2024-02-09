import { Component } from '@angular/core';
import { interval, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select

  public name: string = 'Fernando';
  public gender: 'male' | 'female' | 'no existe' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = [
    'Maria',
    'Carlos',
    'Fernando',
    'Eduardo',
    'Rodrigo',
    'Camila',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos personas esperando',
    '=3': 'tenemos tres personas esperando',
    other: 'tenemos #  clientes esperando',
  };

  deleteClient() {
    this.clients.pop();
  }

  // keyValue Pipe
  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Chile',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
      this.person.name = "Sebastian"
    }, 3500)
  })
}
