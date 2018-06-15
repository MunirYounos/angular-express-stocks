import { Component, OnInit } from '@angular/core';
import { Stock } from '../../services/stocks';
import { StockService } from '../../services/stock.service';
import '../../services/rxjs-operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:  [StockService]
})
export class HomeComponent implements OnInit {
  isSubmitted = false;
  title = 'Stocks Business with Socket IO';
  public stockMessages = [];

  constructor(private stockService: StockService) { }


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

  ngOnInit() {
    this.getStocks();
  }

}
