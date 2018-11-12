import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  isLoggedIn = false;

  redirectUrl:String;

  constructor() { }

  login(): Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val=>this.isLoggedIn=true)
    );
  }

  logout(): void{
    this.isLoggedIn = false;
  }
}
