import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from "lodash";
import { FixerService } from './currency-exchanger/services/fixer/fixer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-exchanger';


  constructor(public dataService: FixerService) {

  }



}
