import { Component, OnInit } from '@angular/core';
import { FixerService } from '../../services/fixer/fixer.service';
import * as _ from "lodash";


@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  resultCurrencyItems = []
  dataFormObj = {};
  constructor(public fixerService: FixerService) {}

  ngOnInit(): void {  }

  getPopularCurrency(data) {
    this.resultCurrencyItems = data;
  }
  getFormInfo(formObj) {
    this.dataFormObj = formObj;
  }
}
