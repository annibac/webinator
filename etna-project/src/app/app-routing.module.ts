import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { GameComponent } from './component/game/game.component';
import { HomeComponent } from './component/home/home.component';

import { AuthGuard } from './guard/auth/auth.guard';

// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//  { path: 'detail/:id', component: HeroDetailComponent },
//  { path: 'heroes', component: HeroesComponent }
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', canActivate: [AuthGuard], component: GameComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
