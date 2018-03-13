import { Component, OnInit, Input, Output } from '@angular/core';

import { Player } from '../player';

import { TeamService } from '../team.service';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  @Input() player: Player;
  @Output() assignedPlayer = new EventEmitter<Player>();

  team = '';
  teams: string[] = this.teamService.getTeamNames();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  assignPlayer() {
    this.teamService.addPlayer(this.player, this.team);
    this.assignedPlayer.emit(this.player);
  }

}
