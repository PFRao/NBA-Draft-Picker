import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import { PlayerService } from './player.service';

import { FormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { TeamService } from './team.service';
import { AppRoutingModule } from './/app-routing.module';
import { RosterComponent } from './roster/roster.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent,
    RosterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService, MessageService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
