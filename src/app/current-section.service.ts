import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentSectionService {

  currentSection!: string;

  constructor() { }
}
