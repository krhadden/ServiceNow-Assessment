import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAllIncidents(): Observable<any> {
    const url = 'https://servicenow-ui-coding-challenge-api.netlify.app/.netlify/functions/server/incidents';
    return this.httpClient.get(url);
  }

  public getIncidentsByState(state: string): Observable<any> {
    const url = 'https://servicenow-ui-coding-challenge-api.netlify.app/.netlify/functions/server/incidentsByState';
    const params = new HttpParams().set('state', state);
    return this.httpClient.get(url, {params});
  }
}
