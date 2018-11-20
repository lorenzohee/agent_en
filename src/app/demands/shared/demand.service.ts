import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Demand } from './demand.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Favorite } from './favorite.model';
import { AuthorizationService } from '../../core/authorization/authorization.service';

const demandUrl = 'assets/demands.json';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  httpOptions: Object;

  constructor(private http: HttpClient, private authen: AuthorizationService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'contentType': 'application/json',
        'Authorization': authen.authen_token.toString(),
        'dataType': 'json'
      })
    };
  }

  getDemands(): Observable<Demand[]> {
    return this.http.get<Demand[]>(environment.baseApiPath + '/api/v1/demand_blogs/', this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addDemand(demand: Demand): Observable<Demand> {
    return this.http.post<Demand>(demandUrl, demand, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getDemandById(id: number | string): Observable<Demand> {
    return this.http.get<Demand>(environment.baseApiPath + '/api/v1/demand_blogs/' + id, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  ignoreDemand(demandId: Number, userId: Number): Observable<Demand> {
    return this.http.put<Demand>(environment.baseApiPath + '/demands/ignoreDemand', {
      demandId: demandId,
      userId: userId}, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  favoriteDemand(demandId: Number, userId: Number): Observable<Favorite> {
    return this.http.put<Favorite>(environment.baseApiPath + '/demands/favorite', {
      demandId: demandId,
      userId: userId}, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  unFavoriteDemand(favoriteId: Number): Observable<Favorite> {
    return this.http.put<Favorite>(environment.baseApiPath + '/demands/unfavorite',
    {id: favoriteId}, this.httpOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
