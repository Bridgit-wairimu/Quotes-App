import { Quote } from '@angular/compiler';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  
  @Input() quote: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();
  quotedislikes: number;
  quotelikes: number;
  
  
  delete (removeQuote: boolean) {
    this.deleteQuote.emit(removeQuote);
  }
    
  // upvotes(){
  //   this.quote.likes +=1;
  // }
  // downvotes(){
  //   this.quote.dislikes +=1;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
