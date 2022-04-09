// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Quote } from '../quote';
// @Component({
//   selector: 'app-quotes-detail',
//   templateUrl: './quotes-detail.component.html',
//   styleUrls: ['./quotes-detail.component.css']
// })
// export class QuotesDetailComponent implements OnInit {
//   @Input() quote!:Quote;
//   @Output()isVoted = new EventEmitter<boolean>();
  
//   quoteUpVote(quoteUpVote:boolean){
//     this.isVoted.emit(quoteUpVote);
//   }

//   quoteDownVote(quoteDownVote:boolean){
//     this.isVoted.emit(quoteDownVote);
//   }



//   constructor() { }

//   ngOnInit(): void {
//   }
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isVoted = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isVoted.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isVoted.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}


