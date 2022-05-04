import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CurrencyExchangerModule } from './currency-exchanger/currency-exchanger.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeadersInterceptor } from './core/interceptor/headers-interceptor.service';
import { CurrencyDetailsResolver } from './currency-exchanger/services/resolvers/currency-details.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    CurrencyExchangerModule
  ],
  providers: [
    CurrencyDetailsResolver,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HeadersInterceptor, 
      multi: true
    }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
