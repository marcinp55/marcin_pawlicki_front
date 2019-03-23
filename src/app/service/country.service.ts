import { OnInit } from '@angular/core';
import { CountryModel } from '../model/country/country.model';

export class CountryService implements OnInit {
  private countries: CountryModel[] = [
    new CountryModel('Poland', 'PLN', 19, 1200),
    new CountryModel('Germany', 'EUR', 20, 800),
    new CountryModel('United Kingdom', 'GBP', 25, 600),
    new CountryModel('United States', 'USD', 23, 1000)
    ];

  ngOnInit() {
  }

  public getCountries(): CountryModel[] {
    return this.countries.slice();
  }
}
