import { Component, OnInit, OnDestroy, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/users.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ActivatedRoute, Params, Data, Router } from '@angular/router';
import { ComponenteDisattivabile } from 'src/app/can-deactivate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, ComponenteDisattivabile {


  sotoscrizione: Subscription;

  user: User;
  userConfronto: User;

  constructor(
    private obsService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => {
        this.user = data['user'];
        let indirizzo = { via: '' };
        this.userConfronto = { ...this.user };
        this.userConfronto.indirizzo = { ...this.user.indirizzo };
        if (!this.user.indirizzo) {
          this.user.indirizzo = { ...indirizzo };
          this.userConfronto.indirizzo = { ...indirizzo };
        }
      }
    );

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.confrontaEgualianza())
      return confirm('Sei sicuro di voler uscire da \'USER\' ? ');
    return true;
  }

  goUp() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  confrontaEgualianza(): boolean {
    return JSON.stringify(this.user) === JSON.stringify(this.userConfronto);
  }

  ngOnDestroy() { }

}
