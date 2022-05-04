import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FixerService } from '../../services/fixer/fixer.service';

@Component({
  selector: 'header-currency',
  templateUrl: './header-currency.component.html',
  styleUrls: ['./header-currency.component.scss']
})
export class HeaderCurrencyComponent implements OnInit , OnDestroy{
  sub: Subscription;
  constructor(public fixerService: FixerService, private router:Router) { }

  ngOnInit(): void {
  }
  currencyDetails(to,from,amount) {
   this.sub =  this.fixerService.getCurrencyCal(to,from,amount).subscribe((res:any) => {
    const currencyObj = { from: res.query?.from, to:res.query?.to,  amount:res.query?.amount, cal: res.result }
      this.fixerService.currencyDetails.next(currencyObj);
      this.router.navigateByUrl('/details');
    })
  }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
