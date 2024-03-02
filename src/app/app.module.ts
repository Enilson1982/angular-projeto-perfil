import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { BigCardComponent } from './component/big-card/big-card.component';
import { SmallCardComponent } from './component/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SmallCard2Component } from './component/small-card2/small-card2.component';
import { BigCard1Component } from './component/big-card1/big-card1.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    SmallCard2Component,
    BigCard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
