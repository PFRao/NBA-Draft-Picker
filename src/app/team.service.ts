import { Injectable } from '@angular/core';

import { Player } from './player';
import { TEAMS } from './team-list';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TeamService {

  teams: Map<string, Player[]> = TEAMS;

  constructor(private messageService: MessageService) { }

  addPlayer(player: Player, team: string): void {
    this.messageService.add('TeamService: ' + player.name + ' added to ' + team);
    this.teams.get(team).push(player);
  }

  getTeamNames(): string[] {
    return Array.from(this.teams.keys());
  }

}
