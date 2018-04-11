import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  public stock: Stock;
  constructor(
    private routeInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(6)]],
    });
  }

  public cancel() {
    this.router.navigateByUrl('/stock');
  }

  public save() {
    console.log('value', this.formModel.value);
    // this.router.navigateByUrl('/stock');
  }
}
