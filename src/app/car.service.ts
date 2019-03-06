import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})


export class CarService {
  constructor(private http: HttpClient) { }
  // API FOLDER WITH PHP FILES
  // MUST BE PLACED IN THE HTDOCS FOLDER
  // SEPERATE FROM ANGULAR PROJECT 
  baseUrl = 'http://localhost/api';
cars: Car[];

  getAll(): Observable<Car[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        console.log(res);
        this.cars = res['data'];
        return this.cars;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}