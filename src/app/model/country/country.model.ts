export class CountryModel {
  public countryName: string;
  public currencyCode: string;
  public tax: number;
  public fixedCost: number;

  constructor(countryName: string, currencyCode: string, tax: number, fixedCost: number) {
    this.countryName = countryName;
    this.currencyCode = currencyCode;
    this.tax = tax;
    this.fixedCost = fixedCost;
  }
}
