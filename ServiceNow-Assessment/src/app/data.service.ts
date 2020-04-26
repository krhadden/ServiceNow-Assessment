import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAllIncidents(): Observable<any> {
    const url = 'https://servicenow-ui-coding-challenge-api.netlify.app/.netlify/functions/server/incidents';
    return this.httpClient.get(url).pipe(catchError(this.handleError));
  }

  public getIncidentsByState(state: string): Observable<any> {
    const url = 'https://servicenow-ui-coding-challenge-api.netlify.app/.netlify/functions/server/incidentsByState';
    const params = new HttpParams().set('state', state);
    return this.httpClient.get(url, {params}).pipe(catchError(this.handleError));
  }

  public createNewIncident(data: any): Observable<any> {
    const url = 'https://servicenow-ui-coding-challenge-api.netlify.app/.netlify/functions/server/insertIncident';
    const body = data;
    return this.httpClient.post(url, body).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error has occurred.';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
