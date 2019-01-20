import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { CustomUppercasePipe } from './custom-uppercase.pipe';
import { FormsModule } from '@angular/forms'
import { UsersService } from './users.service';
import { LoggingService } from './logging.service';
import { AltroModule } from './altro/altro.module';
import { API_URL } from './altro/API_URL_ALTRO';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { CanActivateGuard } from './can-activate.guard';
import { PassingDataService } from './passing-data.service';
import { InfoComponent } from './info/info.component';
import { CanDeactivateService } from './can-deactivate.service';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path: 'users',
    canActivate: [CanActivateGuard],
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
        canDeactivate: [CanDeactivateService],
        resolve: {
          user: PassingDataService
        }
      }
    ]
  },
  { path: 'info', component: InfoComponent },
  { path: 'not-found', component: NotFoundComponent, data: { title: 'Errore' } },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CustomUppercasePipe,
    HomeComponent,
    NotFoundComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AltroModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: API_URL, useValue: '../assets/data.json' },
    { provide: UsersService, useClass: UsersService },
    {
      provide: LoggingService, useFactory: () => {
        return new LoggingService(true)
      }
    },
    CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
