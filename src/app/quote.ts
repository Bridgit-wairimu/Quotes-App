export class Quote {
    displayQuote : boolean;
    constructor(public name:string,public quote:string,public author:string, public postedDate: string,public likes:number, public dislikes:number ){
        this.displayQuote = false;
    }
}
