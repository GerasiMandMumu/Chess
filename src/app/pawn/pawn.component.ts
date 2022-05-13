import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.scss']
})
export class PawnComponent implements OnInit {

  a: number = 0;
  status: string = "";

  @ViewChild('pawn') nameRef!: ElementRef;

  constructor(elem: ElementRef) {
    
   }

  ngOnInit(): void {
  }

  move(): void{
    let pos = this.nameRef.nativeElement.style.top;
    this.nameRef.nativeElement.style.setProperty('top', (pos+60)+'px');
    console.log(pos);
    pos += 60;
  }
}
