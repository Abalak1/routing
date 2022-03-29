import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';

@NgModule({
  declarations: [AppComponent, UserslistComponent, UsersdetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Userslist', component: UserslistComponent },
      { path: 'Usersdetails', component: UsersdetailsComponent },
      { path: '', redirectTo: '/Userslist', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
