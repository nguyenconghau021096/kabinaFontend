import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss'],
    host: {
        'class': 'vertical-nav'
    }
})
export class VerticalNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
