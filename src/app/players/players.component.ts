import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../player-roster';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}
