import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating = 0;
  stars: boolean[];

  @Input() readonly = true;
  constructor() { }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  ngOnInit() {

  }

  ngOnChanges() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index) {
    if (!this.readonly) {
      this.rating = index + 1;
    }

    this.ratingChange.emit(this.rating);
  }

}
