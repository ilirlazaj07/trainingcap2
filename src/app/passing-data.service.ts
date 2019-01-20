import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class PassingDataService implements Resolve<User> {

  constructor(private service: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    let id = +route.params['id'];

    return this.service.getUsers().pipe(
      map(users => users.find(
        user => user.id == id
      ))
    );

  }

}
