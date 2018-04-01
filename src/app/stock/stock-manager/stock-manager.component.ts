import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  public stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, 'First Stock', 1.0, 3.5, 'First', ['CS', 'test']),
      new Stock(2, 'Second Stock', 2.0, 4.0, 'Second', ['IT', 'test']),
      new Stock(3, 'Third Stock', 3.0, 4.5, 'Third', ['ICT', 'test']),
      new Stock(4, 'Fourth Stock', 4.0, 5.0, 'Fourth', ['CS', 'test']),
      new Stock(5, 'Fifth Stock', 5.0, 3.5, 'Fifth', ['IT', 'test']),
      new Stock(6, 'Sixth Stock', 6.0, 2.0, 'Sixth', ['ICT', 'test']),
    ];
    console.log('this.stocks', this.stocks);
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

