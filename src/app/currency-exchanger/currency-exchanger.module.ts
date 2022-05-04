import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangerRoutingModule } from './currency-exchanger-routing.module';
import { CurrencyExchangerComponent } from './currency-exchanger.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CurrenciesCardsComponent } from './components/currencies-cards/currencies-cards.component';
import { HeaderCurrencyComponent } from './components/header-currency/header-currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HistoricalDataComponent } from './components/historical-data/historical-data.component';
import { StickyPanelComponent } from './components/sticky-panel/sticky-panel.component';


@NgModule({
  declarations: [
    CurrencyExchangerComponent,
    CurrencyConverterComponent,
    CurrenciesCardsComponent,
    HeaderCurrencyComponent,
    CurrencyDetailsComponent,
    HistoricalDataComponent,
    StickyPanelComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CurrencyExchangerComponent,
    CurrencyConverterComponent,
    CurrenciesCardsComponent,
    HeaderCurrencyComponent

  ]
})
export class CurrencyExchangerModule { }
