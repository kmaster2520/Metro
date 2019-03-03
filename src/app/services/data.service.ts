import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getRailLines() {
    //return ['Blue', 'Silver', 'Orange'];
    return of(['Blue', 'Silver']);
  }

  getStations() {
    return of({
      'Blue': [{ name: 'Blue1', cost: 100 }, { name: 'Blue2', cost: 150 }],
      'Silver': [{ name: 'Silver1', cost: 200 }, { name: 'Silver2', cost: 250 }]
    });
  }

}
