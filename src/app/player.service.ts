import { Injectable } from '@angular/core';

import { Player } from './player';
import { PLAYERS } from './player-roster';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(PLAYERS);
  }

}
