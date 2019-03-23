export class ApiResponseModel {
  grossPay: number;
  netPay: number;

  constructor(grossPay: number, netPay: number) {
    this.grossPay = grossPay;
    this.netPay = netPay;
  }
}
