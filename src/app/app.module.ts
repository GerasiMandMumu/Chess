import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';
import { FigureComponent } from './figure/figure.component';
import { PawnComponent } from './pawn/pawn.component';
import { KnightComponent } from './knight/knight.component';
import { OfficerComponent } from './officer/officer.component';
import { RookComponent } from './rook/rook.component';
import { QueenComponent } from './queen/queen.component';
import { KingComponent } from './king/king.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CellComponent,
    BoardComponent,
    FigureComponent,
    PawnComponent,
    KnightComponent,
    OfficerComponent,
    RookComponent,
    QueenComponent,
    KingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
