import { CountryModel } from '../country/country.model';

export class CalculatorDataModel {
  countryModel: CountryModel;
  dailyAmount: number;
  grossPay: number;
  netPay: number;

  constructor(countryModel: CountryModel, dailyAmount: number, grossPay: number, netPay: number) {
    this.countryModel = countryModel;
    this.dailyAmount = dailyAmount;
    this.grossPay = grossPay;
    this.netPay = netPay;
  }
}
