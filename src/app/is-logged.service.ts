import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {
  private hasLoggedIn = new BehaviorSubject(false);
  Logged = this.hasLoggedIn.asObservable();

  constructor() { }
  
  updateHasLoggedIn(logStatus) {
    this.hasLoggedIn.next(logStatus)
    this.Logged = logStatus;
  }
}
