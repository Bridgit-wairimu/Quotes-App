export class Quote {
    displayQuote : boolean;
    constructor(public name:string,public quote:string,public author:string,public date:string ){
        this.displayQuote = false;
    }
}
