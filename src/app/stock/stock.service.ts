import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }
  private stocks: Stock[] = [
    new Stock(1, 'First Stock', 1.0, 3.5, 'First', ['CS', 'IT']),
    new Stock(2, 'Second Stock', 2.0, 4.0, 'Second', ['IT', 'ICT']),
    new Stock(3, 'Third Stock', 3.0, 4.5, 'Third', ['ICT', 'CS']),
    new Stock(4, 'Fourth Stock', 4.0, 5.0, 'Fourth', ['CS']),
    new Stock(5, 'Fifth Stock', 5.0, 3.5, 'Fifth', ['IT']),
    new Stock(6, 'Sixth Stock', 6.0, 2.0, 'Sixth', ['ICT']),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(number: number): Stock {
    let stock =  this.stocks.find(s => s.id == number);
    if (!stock) {
      stock = new Stock(0, '', 0, 0, '', ['']);
    }
    return stock;
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
