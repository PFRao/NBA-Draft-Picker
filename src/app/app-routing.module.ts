import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { RosterComponent } from './roster/roster.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'roster', component: RosterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
