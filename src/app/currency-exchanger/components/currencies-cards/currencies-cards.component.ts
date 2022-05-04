import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'currencies-cards',
  templateUrl: './currencies-cards.component.html',
  styleUrls: ['./currencies-cards.component.scss']
})
export class CurrenciesCardsComponent implements OnInit {
  @Input() items; // decorate the property with @Input()
  @Input() fromCurrencyInput; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
    
  }

}
