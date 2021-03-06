import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  quotes: Quote[]= [
    new  Quote('Maxwell','Success is sweet but the sweat is bitter','Bridgit Kirika' ,new Date(2020,5,14),0,0),
    new Quote ('Adrian','Dont let yesterday take up too much time of today','Will Rodgers',new Date(2012,1,31),0,0),
    new Quote('Bernad','If you want to fly ,give up everything that weighs you down','Nimmoh Kamummy',new Date(2016,3,12),0,0),
    new Quote('Andrew','Dont loose hope when the sun goes down,the stars comes out','Bill Savage',new Date(1994,7,24),0,0),
    new Quote('Kayleen','I may not be good for someone but i will be the best to those who deserve me','Bett Green',new Date(1999,9,7),0,0),
  ];
  
  showQuote(index) {
    this.quotes[index].displayQuote = !this.quotes[index].displayQuote
  }

  addeQuote(quote){
    let arraysize = this.quotes.length;
    this.quotes.push(quote)
  }

  deleteThisQuote(deleteQuote, index) {
    if(deleteQuote) {
      this.quotes.splice ( index , 1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}  
