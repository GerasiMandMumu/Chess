import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';
import { KnightComponent } from './knight/knight.component';
import { GameService } from './board/gameService';
import { BoardSquareComponent } from './board-square/board-square.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CellComponent,
    BoardComponent,
    KnightComponent,
    BoardSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    CommonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
