import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

// Constants
import { environment } from '../../environments/environment';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
  ) { }

  getHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.headers;
  }

  get(url, params = new HttpParams()): Promise<any> {
    return this.http
      .get(`${baseUrl}/${url}`, { headers: this.getHeaders(), params })
      .toPromise();
  }
}