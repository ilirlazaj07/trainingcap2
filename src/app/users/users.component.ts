import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit, OnDestroy {


  users: User[];

  msg: string = 'Nessun User clickato';

  show: boolean;

  promessa: Promise<User[]>;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe(
      utenti => {
        this.users = utenti;
        this.show = this.users.length == 0;
      }
    );

  }

  ngOnDestroy(): void {

  }

  handleEvent(user: User) {

  }

  getPic(id: number): string {

    return '../../assets/' + id + '.png'

  }

  goToUser(user: User) {

    this.router.navigate([user.id], { relativeTo: this.route });

  }

}
