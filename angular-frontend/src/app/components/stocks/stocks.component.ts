import { Component, OnInit } from '@angular/core';
import { Stock } from '../../services/stocks';
import { StockService } from '../../services/stock.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import '../../services/rxjs-operators';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers:  [StockService]
})

export class StocksComponent implements OnInit {

  user:Object;

  isSubmitted = false;
  title = 'Stocks Business with Socket IO';
  model = new Stock('','', '', '', '','');
  public stockMessages = [];

  constructor(private stockService: StockService,private authService:AuthService, private router:Router) { }

  submitStock() {
    this.stockService.addStocks(this.model)
      .subscribe(
        stocksMsg => {
          this.model = stocksMsg;
          //this.getStocks();
        },
        error =>  this.title = <any>error
      );
  }


  getStocks() {
    //console.log('Subscribe to service');
    this.stockService.getStocks()
    .subscribe(
        messages => {
          //console.log("Messages:",messages);
          this.stockMessages = messages;
        },
        error =>  this.title = <any>error
      );
  }

  //date

  ngOnInit() {
    this.getStocks();

    this.authService.getProfile().subscribe(profile => {
     this.user = profile.user;
    },
     err => {
       console.log(err);
       return true;
     });
  
  }

}
