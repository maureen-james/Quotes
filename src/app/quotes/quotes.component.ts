import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
        new Quote(1,"Write it on your heart that every day is the best day in the year.","By: Ralph Waldo Emerson",0,0,"description", "submitted by:Maureen",new Date("2022-04-08")),
        new Quote(2,"Accentuate the positive, Eliminate the Negative, latch onto the affirmative.","By: Bing Crosby",0,0,"description","submitted by:Maureen", new Date("2022-04-08")),
        new Quote(3,"You cannot have a positive life and a negative mind.","By: Joyce Meyer",0,0,"description", "submitted by:Maureen",new Date("2022-04-08")),
        new Quote(4,"A positive atmosphere nurtures a positive attitude, which is required to take positive action.","By: Richard M. DeVos",0,0,"description", "submitted by:Maureen", new Date("2022-04-08"))
   ]

      
        arr:number[]=this.quotes.map(quote=>quote.like)
          highest = Math.max(...this.arr)

        toggleDetails(index:number){
          this.quotes[index].showDescription = !this.quotes[index].showDescription;
        }
        completeQuote(isVoted:any, index:number){
          if (isVoted) {
            this.quotes.splice(index,1);
          }
        }
        deleteQuote(isVoted:any, index:number){
          if (isVoted) {
            let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      
            if (toDelete){
              this.quotes.splice(index,1)
            }
          }
        }

        addNewQuote(quote: Quote) {
          let quoteLength = this.quotes.length;
          quote.id = quoteLength + 1;
          quote.postdate = new Date(quote.postdate)
          this.quotes.push(quote);
        }

  constructor() { }

  ngOnInit(): void {
  }

}
