import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyRate } from '../../models/currency-rate/currency-rate';
import { Rates } from '../../models/currency-rate/rates';
import { CurrencySymbol } from '../../models/currency-symbols/currency-symbols';
import { Symbols } from '../../models/currency-symbols/symbols';
import { FixerService } from '../../services/fixer/fixer.service';

@Component({
  selector: 'sticky-panel',
  templateUrl: './sticky-panel.component.html',
  styleUrls: ['./sticky-panel.component.scss']
})
export class StickyPanelComponent implements OnInit {
  rate:Rates;
  symbol:Symbols;
  
  rates = [];
  rateKeys = [];
  symbols = [];
  symbolKeys = [];
  symbolFilter = ["AED","SAR","EGP","USD","RUB","QAR","KWD","EUR","CNY","BTC","NAD"]
  resultCurrencyItems = []
  popularCurrencyItems = [];
  amount:number = 0;
  cal:number = 0;
  toIndexSelected:number = 0;
  fromIndexSelected:number = 0 ;

  result:string;
  codeToIndex:string = '';
  codeFromIndex:string = '';
  newForm: FormGroup;
  dataFormObj = {};
  
  @Output() popularCurrency: EventEmitter<any> = new EventEmitter();
  @Output() FormInfo: EventEmitter<any> = new EventEmitter();
  @Input() criteriesObj; // decorate the property with @Input()
  @Input() formUpdated; // decorate the property with @Input()

  
  constructor(public fixerService: FixerService, private fb: FormBuilder) {}

    ngOnInit(): void {
      this.prepareForm(); // init Form 
      this.getRates(); // init Rates 
      this.getSymbols();// init Symbols     
      this.updatedForm();
    }

    //Start Block Prepare Form Converter
    prepareForm() {
      this.newForm = this.fb.group({
        from: [null,Validators.required],
        to: [null,Validators.required],
        amount: [null, Validators.required],
      })
    }
    //End Block Prepare Form Converter

   //Start Block Rates
    getRates() {
      this.fixerService.currencyRate().subscribe((data:CurrencyRate) => {
        this.rate = data["rates"];
        this.rateKeys = Object.keys(this.rate);
        for (var i = 0; i < this.rateKeys.length; i++) {
          this.rates.push({
            code: this.rateKeys[i],
            text: this.rate[this.rateKeys[i]]
          });
        }
         this.popularCurrencyItems =  this.rates.filter(res => this.symbolFilter.includes(res.code)); //To Get  9  most popular currencies
         this.convert();
      },
      err => {}
    );
    }
  //End Block Rates

  //Start Block Symbols
  getSymbols() {
    this.fixerService.currencySymbols().subscribe((data:CurrencySymbol) => {
      this.symbol = data["symbols"];
      this.symbolKeys = Object.keys(this.symbol);
      for (var i = 0; i < this.symbolKeys.length; i++) {
        this.symbols.push({
          code: this.symbolKeys[i],
          text: this.symbol[this.symbolKeys[i]]
        });
      }
        this.setInitialValue();
    },
    err => {}
  );
  }
  //Start Block Symbols

  //Start Block Convert Method

  convert() {  
    let from = this.newForm.controls["from"].value;
    let to = this.newForm.controls["to"].value;
    this.amount = this.newForm.controls["amount"].value;

    this.resultCurrencyItems = [];

    let toIndex = this.rates.findIndex(x=> x.code == to ); 
    let fromIndex = this.rates.findIndex(x=> x.code == from );

    let ratio = this.rates[toIndex]?.text / this.rates[fromIndex]?.text;
    this.cal = ratio * this.amount;
    this.codeFromIndex = this.rates[fromIndex]?.code;
    this.codeToIndex = this.rates[toIndex]?.code;

    this.getFormData();
    this.popularCurrencies(fromIndex);
  }
  //End Block  Convert Method

  //Start Block popular Currencies 9 cards
  popularCurrencies(fromIndex) {
     this.popularCurrencyItems.map(res => {
      let ratio = res.text / this.rates[fromIndex].text;
      const cal = ratio * this.amount;
      this.resultCurrencyItems.push({
        code: res.code,
        text: cal
      });
    });

    this.resultCurrencyItems = this.resultCurrencyItems.filter(res => res.code !== this.rates[fromIndex].code);
    this.popularCurrency.emit(this.resultCurrencyItems);    
    this.FormInfo.emit(this.dataFormObj);
    this.fixerService.currencyDetails.next(this.dataFormObj);
    
  }
  //End Block popular Currencies 9 cards

  //Start Block  Change Exchange Input [Swap]

  changeExchangeInputValues(): void {
    let from  = this.newForm.get('from').value;
    let to  = this.newForm.get('to').value;
    [from, to] = [to, from];
    this.newForm.patchValue({from,to});
  }

  //End Block  Change Exchange Input [Swap]

  //Start Create obj to assign details page
  getFormData() {
    this.dataFormObj = {
      amount:this.newForm.controls["amount"].value,
      from: this.newForm.controls["from"].value,
      to:this.newForm.controls["to"].value,
      cal:this.cal
    };
  }
//End Create obj to assign details page

  updatedForm() {
    if(!!this.formUpdated) {
      this.newForm.patchValue({
        from: this.formUpdated?.from,
        to: this.formUpdated?.to,
        amount:this.formUpdated?.amount
      });
    this.patchPropValue();
    this.newForm.controls['from'].disable();
    }
  }

  setInitialValue() {
    if(!this.formUpdated) {
      this.newForm.patchValue({
        to:this.symbols[149].code,
        from:this.symbols[46].code,
        amount:1
      })
      this.convert();
    }
  }

  patchPropValue() {
    this.cal = this.formUpdated.cal;
    this.codeFromIndex = this.formUpdated.from;
    this.codeToIndex = this.formUpdated.to;
    this.amount = this.formUpdated.amount
  }
}

