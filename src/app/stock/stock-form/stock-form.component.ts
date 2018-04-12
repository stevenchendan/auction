import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  stock: Stock;
  categories = ['IT', 'CS', 'ICT'];

  constructor(
    private routeInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(6)]],
      price: [this.stock.price, Validators.required],
      desc: [this.stock.desc, Validators.required],
      categories: fb.array([
        new FormControl(this.stock.categories.indexOf(this.categories[0]) !== -1),
        new FormControl(this.stock.categories.indexOf(this.categories[1]) !== -1),
        new FormControl(this.stock.categories.indexOf(this.categories[2]) !== -1),
      ])
    });
    console.log('this.categories.indexOf(this.categories[1])', this.stock.categories.indexOf(this.categories[0]) !== -1);
    console.log('this.categories.indexOf(this.categories[1])', this.stock.categories.indexOf(this.categories[1]) !== -1);
    console.log('this.categories.indexOf(this.categories[1])', this.stock.categories.indexOf(this.categories[2]) !== -1);
  }

  public cancel() {
    this.router.navigateByUrl('/stock');
  }

  public save() {
    this.formModel.value.rating = this.stock.rating;
    console.log('this.formModel.value', this.formModel.value);
    // this.router.navigateByUrl('/stock');
  }
}
