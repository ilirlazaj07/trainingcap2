import { User } from './User';
import { LoggingService } from './logging.service';
import { Injectable, Inject } from '@angular/core';
import { API_URL } from './altro/API_URL_ALTRO';
import { Observable, interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private loggingService: LoggingService, @Inject(API_URL) private apiUrl: string, private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );

  }

  getNumbers(): Observable<number> {

    return interval(1000);

  }


}
