import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock-manager/stock-manager.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, 'New Stock', 5, 5, 'Description', ['CS']);
  }

}
