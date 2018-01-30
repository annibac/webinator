import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { GameComponent } from './component/game/game.component';
import { HomeComponent } from './component/home/home.component';
import { EndComponent } from './component/end/end.component';

import { AuthGuard } from './guard/auth/auth.guard';

// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//  { path: 'detail/:id', component: HeroDetailComponent },
//  { path: 'heroes', component: HeroesComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'home'/*, canActivate: [AuthGuard]*/, component: HomeComponent },
  { path: 'game'/*, canActivate: [AuthGuard]*/, component: GameComponent },
  { path: 'end'/*, canActivate: [AuthGuard]*/, component: EndComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
