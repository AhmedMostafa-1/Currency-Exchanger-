import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { CurrencyExchangerComponent } from './currency-exchanger.component';
import { CurrencyDetailsResolver } from './services/resolvers/currency-details.resolver';

const routes: Routes = [
  { path: '', component: CurrencyConverterComponent },
  { 
    path: 'details', 
  component: CurrencyDetailsComponent,
/*     resolve: {
      detailsResolve: CurrencyDetailsResolver,
        },  */
       },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangerRoutingModule { }
