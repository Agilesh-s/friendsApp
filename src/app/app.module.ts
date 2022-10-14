import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendComponent } from './friend/friend.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';

const appRoutes:Routes = [
  {
    path:"",component:FriendComponent
  },
  {
    path:"add",component:AddFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FriendComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
