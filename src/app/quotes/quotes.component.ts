import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,"Write it on your heart that every day is the best day in the year.","By: Ralph Waldo Emerson",0,0),
    new Quote(2,"Accentuate the positive, Eliminate the Negative, latch onto the affirmative.","By: Bing Crosby",0,0),
    new Quote(3,"You cannot have a positive life and a negative mind.","By: Joyce Meyer",0,0),
    new Quote(4,"A positive atmosphere nurtures a positive attitude, which is required to take positive action.","By: Richard M. DeVos",0,0)
  ]
  arr:number[]=this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
  constructor() { }

  ngOnInit(): void {
  }

}
