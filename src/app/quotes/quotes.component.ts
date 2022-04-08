import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, "first quote",0,0),
    new Quote(1, "second quote",0,0),
    new Quote(1, "third quote",0,0)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
