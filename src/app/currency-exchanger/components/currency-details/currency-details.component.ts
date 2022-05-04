import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { FixerService } from '../../services/fixer/fixer.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit , OnDestroy {

  flagObj = {
    hideBtn: false,
    disableInput: true
  };
  sub: Subscription;
  currencyDetails = {};
  constructor(private route: ActivatedRoute, private router: Router, private fixer: FixerService) { }

  ngOnInit(): void {
    this.getCurrencyDetails();
   }

  getCurrencyDetails() {
    this.sub = this.fixer.currencyDetails.subscribe((res:any) => {
      if(res != null) {
        this.currencyDetails = res;
      } else {
        this.router.navigateByUrl('/currency-exchanger')
      }
    })
  } 
  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }
}
