import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ScoreService } from './services/score/score.service';
import { UserService } from './services/user/user.service';

import { AuthGuard } from './guard/auth/auth.guard';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimerComponent } from './component/timer/timer.component';
import { UserComponent } from './component/user/user.component';
import { UserNameComponent } from './component/user/user-name/user-name.component';
import { UserSexComponent } from './component/user/user-sex/user-sex.component';
import { GameComponent } from './component/game/game.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ActivityComponent } from './component/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    UserComponent,
    UserNameComponent,
    UserSexComponent,
    GameComponent,
    HomeComponent,
    ShopComponent,
    ProjectsComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ScoreService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
