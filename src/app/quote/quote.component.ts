import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new  Quote('Maxwell','Success is sweet but the sweat is bitter','Bridgit Kirika','20/06/2001'),
    new Quote ('Adrian','Dont let yesterday take up too much time of today','Will Rodgers','31/01/2012'),
    new Quote('Bernad','If you want to fly ,give up everything that weighs you down','Nimoh Kamummy','12/03/2016'),
    new Quote('Andrew','Dont loose hope when the sun goes down,the stars comes out','Bill Savage','24/07/1994'),
    new Quote('Kayleen','I may not be good for someone but i will be the best to those who deserve me','Bett Green','7/09/1999'),

  ];

  showQuote(index) {
    this.quotes[index].displayQuote = !this.quotes[index].displayQuote
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
