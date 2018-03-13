import { Component, OnInit } from '@angular/core';

import { Player } from '../player';

import { TeamService } from '../team.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  teams: Map<string, Player[]>;
  teamNames: string[] = this.teamService.getTeamNames();

  ngOnInit() {
    this.getRoster();
  }

  getRoster() {
    this.teams = this.teamService.teams;
  }

}
