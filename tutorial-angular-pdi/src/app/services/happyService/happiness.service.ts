import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  happinessLevel: number = 2;

  constructor() { }

  calcHappinessRange(): number{
    return Math.floor(this.happinessLevel%5);
  }
}
