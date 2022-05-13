import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

class Item{
  purchase: string;
  done: boolean;
  price: number;
   
  constructor(purchase: string, price: number) {

      this.purchase = purchase;
      this.price = price;
      this.done = false;
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

  public surname = "Костян";
  private size = 16;

  text: string = "";
  price: number = 0;

  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('figure') figureRef!: ElementRef;

  items: Item[] = [
    { purchase: 'Хлеб', done: false, price: 15.9 },
    { purchase: 'Масло', done: false, price: 60 },
    { purchase: 'Картофель', done: true, price: 22.6 },
    { purchase: 'Сыр', done: false, price: 310 },
  ]

  addItem(text: string, price: number): void {
    if (text == null || text.trim() == '' || price == null)
      return
    this.items.push(new Item(text, price))
  }


  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.nameRef.nativeElement.style.setProperty('font-size', this.size.toString()+'px');
  }

  onClickAdd(): void{
    this.size++;
    this.nameRef.nativeElement.style.setProperty('font-size', this.size.toString()+'px');
  }

  onClickDel(): void{
    this.size--;
    this.nameRef.nativeElement.style.setProperty('font-size', this.size.toString()+'px');
  }

  onClickChangeFigure(string: String): void{

    var figure = document.querySelector('.figure');

    if (string == 'quad'){
      console.log('quad');
      this.figureRef.nativeElement.style.setProperty('width', '100px');
      this.figureRef.nativeElement.style.setProperty('height', '100px');
      this.figureRef.nativeElement.style.setProperty('border-radius', '0%');
      this.figureRef.nativeElement.style.setProperty('background-color', 'red');
      this.figureRef.nativeElement.style.setProperty('border-left', '0');
      this.figureRef.nativeElement.style.setProperty('border-right', '0');
      this.figureRef.nativeElement.style.setProperty('border-bottom', '0');
    }
    else if(string == 'triangle'){
      this.figureRef.nativeElement.style.setProperty('background-color', 'white');
      this.figureRef.nativeElement.style.setProperty('width', '0');
      this.figureRef.nativeElement.style.setProperty('height', '0');
      this.figureRef.nativeElement.style.setProperty('border-left', '50px solid transparent');
      this.figureRef.nativeElement.style.setProperty('border-right', '50px solid transparent');
      this.figureRef.nativeElement.style.setProperty('border-bottom', '100px solid yellow');
    }
    else if(string == 'circle'){
      this.figureRef.nativeElement.style.setProperty('width', '100px');
      this.figureRef.nativeElement.style.setProperty('height', '100px');
      this.figureRef.nativeElement.style.setProperty('border-radius', '50%');
      this.figureRef.nativeElement.style.setProperty('background-color', 'blue');
      this.figureRef.nativeElement.style.setProperty('border-left', '0');
      this.figureRef.nativeElement.style.setProperty('border-right', '0');
      this.figureRef.nativeElement.style.setProperty('border-bottom', '0');
    }
  }
}
