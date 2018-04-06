import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  public stocks: Array<Stock>;
  public nameFilter: FormControl = new FormControl();
  public keyword: string;

  constructor(public router: Router, private stockService: StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(x => this.keyword = x);
  }

  public create() {
    this.router.navigateByUrl('/stock/0');
  }

  public update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}



