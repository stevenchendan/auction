import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public title: string;
  public desc: string;

  constructor(public router: Router) {
    router.events
      .subscribe(
        e => {
          if (e instanceof NavigationEnd) {
            if (e.url.startsWith('/dashboard')) {
              this.title = 'Home Page';
              this.desc = 'Home Description';
            } else if (e.url.startsWith('/stock')) {
              this.title = 'Stock';
              this.desc = 'Stock Description';
            }
          }
        }

      );
    }

  ngOnInit() {
  }

}
