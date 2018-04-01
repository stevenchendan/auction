import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock.model';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  private stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, 'First Stock', 1.0, 3.5, 'First', ['CS']),
      new Stock(2, 'Second Stock', 2.0, 4.0, 'Second', ['IT']),
      new Stock(3, 'Third Stock', 3.0, 4.5, 'Third', ['ICT']),
      new Stock(4, 'Fourth Stock', 4.0, 5.0, 'Fourth', ['CS']),
      new Stock(5, 'Fifth Stock', 5.0, 3.5, 'Fifth', ['IT']),
      new Stock(6, 'Sixth Stock', 6.0, 2.0, 'Sixth', ['ICT']),
    ];
  }

}


