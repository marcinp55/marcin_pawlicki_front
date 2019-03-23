import { Component, OnInit } from '@angular/core';
import { CalculatorFormService } from '../../service/calculator-form.service';
import { CalculatorDataModel } from '../../model/calculator/calculator-data.model';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css']
})
export class CalculatorDisplayComponent implements OnInit {
  private dailyAmount = 0;
  private grossAmount = 0;
  private tax = 0;
  private fixedCost = 0;
  private currencyCode = '';
  private netAmount = 0;
  private fetchedCalcData: CalculatorDataModel;

  constructor(private calcFormService: CalculatorFormService) {
  }

  ngOnInit() {
    this.calcFormService.currentData.subscribe((calcDataModel: CalculatorDataModel) => {
      if (calcDataModel !== null) {
        this.fetchedCalcData = calcDataModel;
        console.log(calcDataModel);
        this.fillData();
      }
    });
  }

  fillData() {
    this.dailyAmount = this.fetchedCalcData.dailyAmount;
    this.grossAmount = this.fetchedCalcData.grossPay;
    this.netAmount = this.fetchedCalcData.netPay;
    this.tax = this.fetchedCalcData.countryModel.tax;
    this.fixedCost = this.fetchedCalcData.countryModel.fixedCost;
    this.currencyCode = this.fetchedCalcData.countryModel.currencyCode;
  }
}
