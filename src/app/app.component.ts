import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  mainLoadingToggle: boolean = false;

  ngOnInit(): void {

    this.router.events.subscribe(
      evento => {
        // Casi di base relativi a questa mini app
        // Definita a livello globale su ogni cambio della route
        if (evento instanceof NavigationStart || evento instanceof NavigationEnd || evento instanceof NavigationCancel)
          this.mainLoadingToggle = !this.mainLoadingToggle;
      }
    );
  }

}
