import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formName: string;
  formQuote: string;
  formAuthor:  string;
  newQuote: any;
  published: Date;
  
  quotes: Quotes[] = [
     new Quotes('Maggy', 'Three things can never be hidden ,the sun ,the moon and the truth','date',new Date()),
     new Quotes('Teddy','PROMISE:We break them..MEMORIES: They break us','date', new Date ()),
  ];

  submitQuote () {
    this.newQuote = new Quotes(this.formName, this.formQuote, this.formAuthor,new Date());
    this.quotes.push(this.newQuote);
  }

  newDate(): Date {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
