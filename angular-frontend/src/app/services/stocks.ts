export class Stock {
  dateoff:Date;
    constructor(
      public username: string,
      public stockName: string,
      public profit: string,
      public price: string,
      public body: string,
      public date: string) { 
      this.dateoff =new Date(date)
       }
  }