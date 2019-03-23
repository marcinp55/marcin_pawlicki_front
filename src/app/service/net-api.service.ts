import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../model/calculator/api-response.model';

@Injectable()
export class NetApiService {
  private endpointRootUrl = 'http://localhost:8080/nbp/net';

  constructor(private httpClient: HttpClient) {
  }

  getGrossToNet(fixedCost: number, tax: number, dailyPay: number, currCode: string) {
    return this.httpClient.get<ApiResponseModel>(this.endpointRootUrl, {
      params: new HttpParams().append('fixedCost', fixedCost.toString())
                              .append('tax', tax.toString())
                              .append('dailyPay', dailyPay.toString())
                              .append('currCode', currCode) }
    );
  }
}
