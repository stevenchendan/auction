import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  public stocks: Array<Stock>;

  constructor(public router: Router, private stockService: StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  public create() {
    this.router.navigateByUrl('/stock/0');
  }

  public update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}



