import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountryService } from '../../service/country.service';
import { CountryModel } from '../../model/country/country.model';
import { NetApiService } from '../../service/net-api.service';
import { CalculatorDataModel } from '../../model/calculator/calculator-data.model';
import { CalculatorFormService } from '../../service/calculator-form.service';


@Component({
  selector: 'app-calculator-editor',
  templateUrl: './calculator-editor.component.html',
  styleUrls: ['./calculator-editor.component.css']
})
export class CalculatorEditorComponent implements OnInit {
  private fetchedCountries: CountryModel[];
  private calculatorForm: FormGroup;
  private finalCalculatorData: CalculatorDataModel;

  private countryData: CountryModel;
  private dailyAmount: number;
  private grossPay = 0;
  private netPay = 0;

  constructor(private countryService: CountryService,
              private formBuilder: FormBuilder,
              private netApiService: NetApiService,
              private calcFormService: CalculatorFormService) {}

  ngOnInit() {
    this.fetchedCountries = this.countryService.getCountries();
    this.calculatorForm = this.formBuilder.group({
      countryObject: [this.fetchedCountries[0], Validators.required],
      dailyAmount: [1, [Validators.min(1), Validators.required]]
    });
  }

  onCalculate() {
    this.countryData = this.calculatorForm.get('countryObject').value;
    this.dailyAmount = this.calculatorForm.get('dailyAmount').value;

    this.netApiService.getGrossToNet(this.countryData.fixedCost, this.countryData.tax, this.dailyAmount, this.countryData.currencyCode)
      .subscribe((response) => {
        if (response !== null) {
          this.grossPay = response.grossPay;
          this.netPay = response.netPay;
          this.sendCalculatedData();
        }
      },
        (error: HttpErrorResponse) => {
          alert('Error getting data from the server. \n' + error.message);
        });
  }

  sendCalculatedData() {
    this.finalCalculatorData = new CalculatorDataModel(this.countryData, this.dailyAmount, this.grossPay, this.netPay);
    this.calcFormService.sendData(this.finalCalculatorData);
  }

  onClear() {
    this.calculatorForm.reset();
  }
}
