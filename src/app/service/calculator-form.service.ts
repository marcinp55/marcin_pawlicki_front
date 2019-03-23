import { BehaviorSubject } from 'rxjs';
import { CalculatorDataModel } from '../model/calculator/calculator-data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorFormService {
  private calculatorData = new BehaviorSubject(null);

  currentData = this.calculatorData.asObservable();

  constructor() {
  }

  sendData(calculatorData: CalculatorDataModel) {
    this.calculatorData.next(calculatorData);
  }
}
