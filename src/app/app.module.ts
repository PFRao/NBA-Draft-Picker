import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import { PlayerService } from './player.service';

import { FormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlayerService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
