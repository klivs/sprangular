import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public url = 'http://localhost:8088/api';
  constructor() { }
}
